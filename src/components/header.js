import { Component } from 'react';
import {Link} from 'react-router-dom';
import "../style/header.css";

class Header extends Component{
    render(){
        return(
            <div className="header-wrapper">
                <div className="header">
                    <img className="logo" alt="logo" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5fa6e639-cee5-4a4d-bcd6-118c1e280844%2Fsignature_(2).png?table=block&id=5b8187e8-0846-4c69-b597-71e05b99e0d6&spaceId=027e1c2b-fb40-4815-a812-e373334d7a25&width=100&userId=6f951767-13bd-40af-8a2c-628936c7ac56&cache=v2"  />
                    <ul className="topnav">
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/blog" >Blog</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;