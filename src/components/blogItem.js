import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'


export class BlogItem extends Component {
    constructor(props) {
        super(props)
        this.state  = {
            redirect : false,
            link : ""
        }
    }
    redirect(path){
        this.setState({redirect: true});
        this.setState({link: path});
    }
    render() {
        const { title,id,coverImage } = this.props.blog
        if (this.state.redirect) {
            return <Redirect push to={this.state.link} />;
          }
        return (
            <>

                <div className="blogItem" onMouseDown ={() => this.redirect('/blogs/'+ (title === "" ? "empty" : id))}>
                    {coverImage.files.length !== 0 ? <img className="blogCoverImg" src={coverImage.files[0].name} alt="" /> : <img className="blogCoverImg" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F31b610c6-3a4a-446d-9969-b1d1ae51f8c2%2FUntitled.png?table=block&id=1cf0445d-6907-45ce-a108-e7b8e93e0a51&spaceId=027e1c2b-fb40-4815-a812-e373334d7a25&width=900&userId=6f951767-13bd-40af-8a2c-628936c7ac56&cache=v2" alt="" />}
                    <div className="blogItemText">
                        <h2>{title}</h2>
                    </div>
                </div>
            </>
        )
    }
}

export default BlogItem
