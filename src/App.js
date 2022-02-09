import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Buttons from "./component/Buttons";
import Navbar from "./component/navbar";
import TypeWriterC from "./component/typewriter";
import Footer from "./component/footer";
import Home from "./component/home";
import Tree from "./treecomponent/treecomponent";
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
    <Route path="/tree" component={Tree} />
    </div>
    </Router>
    );
  }
}
