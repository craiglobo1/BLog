import { Component } from 'react';
import { NotionRenderer } from "react-notion";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";


class Page extends Component {
    constructor(props)
    {
       super(props)
       this.state = {
          innerHtml : null,
          pageData : {"results":[]},
          blockMap: {}
       }
    }

    async componentDidMount() {
        const { slug } = this.props
        const blogData = await fetch(
          `https://notion-api.splitbee.io/v1/page/${slug}`
        ).then(res => res.json());
    
        this.setState({ blockMap: blogData })
      }
 
    render() {
    return (
        <div className="Blog">
            <NotionRenderer fullPage blockMap={this.state.blockMap} />
        </div>
      );;
    }
}

export default Page;