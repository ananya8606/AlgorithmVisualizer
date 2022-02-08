import React,{Component} from 'react';
import './App.css';
import Buttons from "./component/Buttons";
import Navbar from "./component/navbar";
import TypeWriterC from "./component/typewriter";
import Footer from "./component/footer";
import Home from "./component/home";
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
      <div>
      <Navbar />
      <TypeWriterC />
      <Home />
      <div class="button1">
      <Buttons />
      </div>
      <Footer />
      </div>
    );
  }
}
