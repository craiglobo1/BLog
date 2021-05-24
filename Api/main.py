import flask
from flask import request, jsonify
import sqlite3
import bs4
from requests_html import AsyncHTMLSession 
import pyppeteer
import asyncio
import os
from slugify import slugify

dir = os.path.dirname(__file__)
filename = os.path.join(dir, 'blog.db')

conn = sqlite3.connect(filename,  check_same_thread=False)
cur = conn.cursor()

query = """PRAGMA table_info(blog);"""
columns = cur.execute(query).fetchall()
columns = [val[1] for val in columns]

app = flask.Flask(__name__)
app.config["DEBUG"] = True

    

@app.route('/', methods=['GET'])
def home():
    return "<h1>Blog Api</h1><p>This site is a prototype API for my blog.</p>"

# A route to return all of the available entries in our catalog.
@app.route('/api/v1/resources/blog/all', methods=['GET'])
def allBlogs():

    all_blogs = cur.execute('SELECT * FROM blog;').fetchall()

    ans = []
    for blog in all_blogs:
        newBlog = {}
        for i, column in enumerate(columns):
            newBlog[column] = blog[i]

        ans.append(newBlog)

    return jsonify(ans)

@app.route('/api/v1/resources/blog', methods=['GET'])
def getBlogs():
    commonArgs = list(set(columns).intersection(request.args.keys()))
    if len(commonArgs) == 0:
        return "Error: No valid field provided. Please specify an valid field."

    all_blogs = cur.execute('SELECT * FROM blog WHERE {} = "{}";'.format(commonArgs[0], request.args[str(commonArgs[0])])).fetchall()

    results = []
    for blog in all_blogs:
        newBlog = {}
        for i, column in enumerate(columns):
            newBlog[column] = blog[i]
        results.append(newBlog)

    return jsonify(results)

@app.route('/api/v1/resources/blog/add', methods=['POST'])
def addBlog():
    data = request.form.to_dict(flat=False)
    data = { key : val[0] for key, val in data.items()}
    data["slug"] = slugify(data["title"])

    if not data["title"]:
        return "Invalid Entry: No Title"
    if not data["notionUrl"]:
        return "Invalid Entry: No notionUrl"

    existingUrls = []
    if data["notionUrl"]:
        query= """
        SELECT notionUrl
        FROM blog
        WHERE EXISTS
        (SELECT notionUrl FROM blog WHERE blog.notionUrl ='""" + data["notionUrl"] + "' );"
        existingUrls = cur.execute(query).fetchall()

    if len(existingUrls) == 0: # if the notion page to be added doesn't exist
        query = "INSERT INTO blog ({}) values ({});".format(",".join([ key for key in data]), ",".join([ f"'{val}'" for _,val in data.items()]))
        ans = cur.execute(query).fetchall()
        conn.commit()
        return jsonify("({}) succesfully added ".format(",".join([ f"'{val}'" for _,val in data.items()])))
    else:
        return "Error: Notion url already exists"

@app.route('/api/v1/resources/blog/remove', methods=['GET'])
def removeBlog():
    if 'id' in request.args:
        id = int(request.args['id'])
        q = f"DELETE FROM blog WHERE id IN ('{id}');"
        ans = f"id of {id}"
    elif 'title' in request.args:
        title = request.args['title']
        q = f"DELETE FROM blog WHERE title IN ('{title}');"
        ans = f"title of {title}"

    elif 'notionUrl' in request.args:
        notionUrl = request.args['notionUrl']
        q = f"DELETE FROM blog WHERE notionUrl IN ('{notionUrl}');"
        ans = f"notionUrl of {notionUrl}"
    else:
        return "Error: no arguments provided in the url"
    cur.execute(q).fetchall()
    conn.commit()
    return jsonify("Removed " + ans) 

@app.route('/api/v1/resources/blog/html', methods=['GET'])
async def getHtml():
    commonArgs = list(set(columns).intersection(request.args.keys()))
    if len(commonArgs) == 0:
        return "Error: No valid field provided. Please specify an valid field."

    if 'notionUrl' in commonArgs:
        notionUrl = request.args['notionUrl']
    else:
        notionUrl = cur.execute('SELECT notionUrl FROM blog WHERE {} = "{}";'.format(commonArgs[0], request.args[str(commonArgs[0])])).fetchall()[0][0]

    new_loop = asyncio.new_event_loop()
    asyncio.set_event_loop(new_loop)
    session = AsyncHTMLSession()
    browser = await pyppeteer.launch({ 
        'ignoreHTTPSErrors':True, 
        'headless':True, 
        'handleSIGINT':False, 
        'handleSIGTERM':False, 
        'handleSIGHUP':False
    })
    session._browser = browser
    resp = await session.get(notionUrl)
    await resp.html.arender(sleep=2.5)

    html = resp.html.html

    soup = bs4.BeautifulSoup(html, "html.parser")
    div = soup.find("div", {"class": "notion-scroller vertical horizontal"})

    content = str(div)
    content = content.replace("/image/", "https://www.notion.so/image/")

    return jsonify({"html": content})
    

app.run()

