import './App.css';
import { Component } from 'react';  

import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect
} from 'react-router-dom';

//Pages
import Home from './pages/home';
import Blog  from './pages/blog';
import ErrorPage  from './pages/errorPage';
import About  from './pages/about';
import blogPage from './pages/blogPage';

class App extends Component {
   constructor(props)
   {
      super(props)
      this.state = {
      }
   }

   render() {
   return (
      <div className="App">
         <Router>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/blog" component={Blog} />
               <Route exact path="/blogs/:slug" component={blogPage} />
               <Route exact path="/about" component={About} />
               <Route exact path="/404" component={ErrorPage} />
               <Redirect to="/404" />
            </Switch>
         </Router>
      </div>
     );
   }
 }

export default App;
