import { Component } from 'react';


class Page extends Component {
    constructor(props)
    {
       super(props)
       this.state = {
          innerHtml : null
       }
    }
 
    componentDidMount()
    {
        // console.log(this.props.)
        fetch(`/api/v1/resources/blog/html?slug=${this.props.slug}`)
        .then(response => response.json())
        .then(data => this.setState({innerHtml : data.html}))
        .then(() => document.getElementById("loader").style.visibility = 'hidden')
        .then(() => document.getElementsByClassName("notion-record-icon").length !== 0 && (document.getElementsByClassName("notion-record-icon")[0].children[0].children[0].children[0].children[1].style.opacity = 1))
    }
 
    render() {
       const { innerHtml } = this.state;
    return (
        <div className="Blog">
            <img alt="loader" src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif" id="loader" className="center" />
            <div dangerouslySetInnerHTML={{__html : innerHtml}} />
        </div>
      );;
    }
}

export default Page;