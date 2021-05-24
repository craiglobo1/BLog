import { Component } from 'react';
import Header from '../components/header';

class About extends Component {
    constructor(props)
    {
       super(props)
       this.state = {}
    }
    render() {
    return (
        <>
        <Header/>
        <h1>About</h1>
        </>
      );;
    }
}

export default About;