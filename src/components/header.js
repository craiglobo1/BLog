import { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div className="header">
            <img id="logo" alt="logo" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8e7474ce-fe03-4092-8ae9-3c9b7167be75%2Fsignature.png?table=block&id=80e883e0-a6cf-4f1e-851e-57329ff1c806&width=1500&userId=&cache=v2"  />
            <div className="divider"></div>
            <nav>
                <ul className="topnav">
                   <li><Link to="/" >Home</Link></li>
                   <li><Link to="/blog" >Blog</Link></li>
                   <li><Link to="/about" >About</Link></li>
                </ul>
             </nav>
             </div>
        );
    }
}

export default Header;