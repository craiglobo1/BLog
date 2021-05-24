import React, { Component } from 'react'
import Header from '../components/header'
import Page from '../components/page'

export class blogPage extends Component {
    render() {
        const { slug } = this.props.match.params;
        return (
            <div>
                <Header/>
                <Page slug={slug} />
            </div>
        )
    }
}

export default blogPage
