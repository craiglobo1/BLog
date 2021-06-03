import { Component } from 'react';
import Header from '../components/header';
import '../style/homeBg.css';
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
            <div className="circle main"></div>
            <div className="circle one"></div>
            <div className="circle two"></div>
            <div className="circle three"></div>
            <div className="Home-desc">
                <div className="myInfo">
                    <h1 className="title" >Hey Guys —</h1>
                    <h2 className="para">I'm Craig. I'm a prospective computer science student with a passion for creating cool and fun innovative projects. </h2>
                    <p>On this site I explore different ideas that I'm interested in, check out why is these ideas are so amazing and my various different passions </p>
                </div>
                <div className="imgholder">

                    <img id="myImg" alt="your pic" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F88980df7-756d-436f-b3a9-82896dd1e69e%2Fmy_web_picture.png?table=block&id=df7444dd-a92f-4969-af6e-1ef9ed11d3d4&spaceId=027e1c2b-fb40-4815-a812-e373334d7a25&width=1250&userId=6f951767-13bd-40af-8a2c-628936c7ac56&cache=v2" />
                </div>
            </div>
        </>
      );
    }
}

export default Home;
