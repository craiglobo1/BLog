import React, { Component } from 'react'
import { NotionRenderer } from "react-notion";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";


export class NotionRender extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blockMap: {}
    }
  }

  async componentDidMount() {
    const { pgId } = this.props
    const blogData = await fetch(
      `https://notion-api.splitbee.io/v1/page/${pgId}`
    ).then(res => res.json());

    this.setState({ blockMap: blogData })
  }


    render() {
        return (
            <div>
                <NotionRenderer fullPage blockMap={this.state.blockMap} />
            </div>
        )
    }
}

export default NotionRender
