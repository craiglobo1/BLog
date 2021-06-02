import { Component } from 'react';
import BlogItem from '../components/blogItem';
import Header from '../components/header';
import "../style/blog.css";

class Blog extends Component {
    constructor(props)
    {
      super(props)
      this.state = {
      'blogs' : []
      }
    }

    componentDidMount(){
      this.getItems();
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
        <img  className="loader" src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif" alt="" />
        <div className="blogView">
            {this.state.blogs.map(function(blog, index){ 
              return <BlogItem key={index} blog={blog} />
            })}
        </div>

        </>
      );;
    }
}

export default Blog;