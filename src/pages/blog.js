import { Component } from 'react';
import BlogItem from '../components/blogItem';
import Header from '../components/header';
import "../style/blog.css";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

class Blog extends Component {
    constructor(props)
    {
      super(props)
      this.state = {
      'blogs' : [],
      'blockMap':{}
      }
    }

    async componentDidMount(){
      this.getItems();
      const blogData = await fetch(
        `https://notion-api.splitbee.io/v1/page/cc1d0e5944544532932c36691a2ceaa3`
      ).then(res => res.json());
  
      this.setState({ blockMap: blogData })
    }

    getItems() {
      fetch("https://craig-blog-api.herokuapp.com/api/v1/resources/blog/published")
        .then(response => response.json())
        .then(data => this.setState({'blogs' : data}))
        .then(() => document.getElementsByClassName('loader'))
        .then(img => img[0].style.display='none')
    }

    render() {
    return (
        <>
        <Header />
        <div className="blog-header">
          <h1>📝 Blog</h1>
          <div className="tags">
            <svg className="tag-image" viewBox="0 0 14 14">
              <path d="M12,1.5 L2,1.5 C1.72386,1.5 1.5,1.72386 1.5,2 L1.5,12 C1.5,12.2761 1.72386,12.5 2,12.5 L12,12.5 C12.2761,12.5 12.5,12.2761 12.5,12 L12.5,2 C12.5,1.72386 12.2761,1.5 12,1.5 Z M2,0 L12,0 C13.1046,0 14,0.895431 14,2 L14,12 C14,13.1046 13.1046,14 12,14 L2,14 C0.89543,14 0,13.1046 0,12 L0,2 C0,0.89543 0.895431,0 2,0 Z M3,3 L6.5,3 L6.5,6.5 L3,6.5 L3,3 Z M7.5,3 L11,3 L11,6.5 L7.5,6.5 L7.5,3 Z M3,7.5 L6.5,7.5 L6.5,11 L3,11 L3,7.5 Z M7.5,7.5 L11,7.5 L11,11 L7.5,11 L7.5,7.5 Z"></path>
            </svg>
            <div>Tags</div>
            <div className="vSymbol">
              <svg viewBox="0 0 30 30" className="chevronDown" >
                <polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 " ></polygon>
              </svg>
            </div>
          </div>
          <div className="search-wrapper">
            <svg viewBox="0 0 515.558 515.558" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 515.558 515.558" className="searchIcon">
                  <path d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"></path>
            </svg>
          </div>
        </div>
        <img  className="loader" src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif" alt="" />
        <div className="blogView">
            {this.state.blogs.map(function(blog, index){ 
              return <BlogItem key={index} blog={blog} />
            })}
        </div>
        <div className="circle main"></div>

        </>
      );;
    }
}

export default Blog;
