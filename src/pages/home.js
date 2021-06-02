import { Component } from 'react';
import Header from '../components/header';
// import Page from '../components/page';

class Home extends Component {
    constructor(props)
    {
       super(props)
       this.state = {}
    }
    componentDidMount()
    {
        document.title = "Craig's Blog"
    }

    render() {
    return (
        <>

            <Header />
            <div className="Home-desc">
                <div className="myInfo">
                    <h1 className="title" >Hey Guys —</h1>
                    <h2 className="para">I'm Craig. I'm a prospective computer science student </h2>
                    <h2 className="para"> with a passion for creating cool and fun innovative projects. </h2>
                </div>
                <div className="imgholder">
                    <img id="myImg" alt="your pic" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F097c71fe-22a6-4ee8-a0ae-a5fb101e30d0%2FIMG_5450_1.png?table=block&id=4ca2b9bb-ad1c-4aac-8f27-f8d364476d75&width=1250&userId=&cache=v2" />
                </div>
            </div>
        </>
      );
    }
}

export default Home;