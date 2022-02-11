import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Buttons from "./component/Buttons";
import Navbar from "./component/navbar";
import TypeWriterC from "./component/typewriter";
import Footer from "./component/footer";
import Home from "./component/home";
import Tree1 from "./treecomponent/bfs";
import Tree2 from "./treecomponent/dfs";
import Tree3 from "./treecomponent/inorder";
import Tree5 from "./treecomponent/preorder";
import Tree4 from "./treecomponent/postorder";
export default class App extends React.Component {
  render(){
    return(
      <Router>
      <div>
      <Route exact path="/">
      <Navbar />
      <TypeWriterC />
      <Home />
      <div class="button1">
    <Buttons />
    </div>
    <Footer />
    </Route>
<Route path="/bfs" component={Tree1} />
<Route path="/dfs" component={Tree2} />
<Route path="/inorder" component={Tree3} />
<Route path="/postorder" component={Tree4} />
<Route path="/preorder" component={Tree5} />
    </div>
    </Router>
    );
  }
}
