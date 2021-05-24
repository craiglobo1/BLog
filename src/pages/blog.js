import { Component } from 'react';
import BlogItem from '../components/blogItem';
import Header from '../components/header';


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
      fetch("/api/v1/resources/blog/all")
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => this.setState({'blogs' : data}));
    }

    render() {
    return (
        <>
        <Header />
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