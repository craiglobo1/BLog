import { Component } from 'react';
import NotionRender from './notionRender';

class Page extends Component {
    constructor(props)
    {
       super(props)
       this.state = {
          innerHtml : null,
          pageData : {"results":[]}
       }
    }
 
    render() {
    return (
        <div className="Blog">
            <NotionRender pgId={this.props.slug} />
        </div>
      );;
    }
}

export default Page;