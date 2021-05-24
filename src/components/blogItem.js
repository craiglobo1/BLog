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
        const { title, slug, coverImgUrl } = this.props.blog
        if (this.state.redirect) {
            return <Redirect push to={this.state.link} />;
          }
        return (
            <div className="BlogItemClick" onClick={() => this.redirect('/blogs/'+ slug)}>
                <div className="blogItem">
                    {!(coverImgUrl === null || coverImgUrl === undefined) ? <img className="blogCoverImg" src={coverImgUrl} alt="" /> : <img className="blogCoverImg" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/31b610c6-3a4a-446d-9969-b1d1ae51f8c2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210524T073124Z&X-Amz-Expires=86400&X-Amz-Signature=2eaffadb145d6068c42f15d2ef48432a6aa67d046f3cda18343b28215afe0d8f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22" alt="" />}
                    <div className="blogItemText">
                        <h1>{title}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogItem
