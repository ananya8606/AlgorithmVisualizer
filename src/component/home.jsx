import React from 'react';
import "./home.css";
import Tree from "../treecomponent/treecomponent";
export default class Home extends React.Component<{}, {activeIndex: number}> {
  constructor(){
          super();
          this.state ={
          }
      }
state = {activeIndex: 0};
  render() {
    return(
  <div class="container">
  <div class="row row-margin-05">
  <div class="col-12 col-sm-6 col-lg-4">
  <div class="card border-dark text-white bg-info">
  <div class="card-body">
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/pjdRJVS/gifgit-2.gif" alt="gifgit-2" border="0"/></a>
  <h4 class="card-title">Stack</h4>
  <div class="dropdown dropright">
  <button onClick={() => {this.setState({ activeIndex: 0 })}}
  class={this.state.activeIndex === 0 ? "btn btn-success dropdown-toggle" : "btn btn-primary dropdown-toggle"} data-toggle="dropdown">Let's play</button>
  <div class="dropdown-menu">
      <a class="dropdown-item" href="/tree">BreadthFirstSearch</a>
      <a class="dropdown-item" href="/tree">DepthFirstSearch</a>
    </div>
  </div>
  </div>
  </div>
  </div>
<div class="col-12 col-sm-6 col-lg-4">
<div class="card border-secondary text-white bg-success">
  <div class="card-body">
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/QCP12LZ/gifgit-3.gif" alt="gifgit-3" border="0"/></a>
  <h4 class="card-title">Tree</h4>
  <div class="dropdown dropright">
  <button onClick={() => {this.setState({ activeIndex: 1 })}}
  class={this.state.activeIndex === 1 ? "btn btn-success dropdown-toggle" : "btn btn-primary dropdown-toggle"} data-toggle="dropdown">Let's play</button>
  <div class="dropdown-menu">
      <a class="dropdown-item" href="/tree">BreadthFirstSearch</a>
      <a class="dropdown-item" href="/tree">DepthFirstSearch</a>
      <a class="dropdown-item" href="/tree">InorderTraversal</a>
      <a class="dropdown-item" href="/tree">PreorderTraversal</a>
      <a class="dropdown-item" href="/tree">PostorderTraversal</a>
    </div>
  </div>
</div>
</div>
</div>
<div class="col-12 col-sm-6 col-lg-4">
<div class="card border-dark text-white bg-danger">
  <div class="card-body">
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/tmsrRKX/gifgit.gif" alt="gifgit" border="0"/></a>
  <h4 class="card-title">Graph</h4>
  <div class="dropdown dropright">
  <button onClick={() => {this.setState({ activeIndex: 2 })}}
  class={this.state.activeIndex === 2 ? "btn btn-success dropdown-toggle" : "btn btn-primary dropdown-toggle"} data-toggle="dropdown">Let's play</button>
  <div class="dropdown-menu">
      <a class="dropdown-item" href="https://imgbb.com/">Action</a>
      <a class="dropdown-item" href="https://imgbb.com/">Another action</a>
    </div>
  </div>
</div>
</div>
</div>
</div>
<div class="row row-margin-05">
<div class="col-12 col-sm-6 col-lg-4">
<div class="card border-dark text-white bg-dark">
<div class="card-body">
<a href="https://imgbb.com/"><img src="https://i.ibb.co/t4v2BLH/gifgit-7.gif" alt="gifgit-7" border="0"/></a>
<h4 class="card-title">Linked List</h4>
<div class="dropdown dropright">
<button onClick={() => {this.setState({ activeIndex: 3 })}}
class={this.state.activeIndex === 3 ? "btn btn-success dropdown-toggle" : "btn btn-primary dropdown-toggle"} data-toggle="dropdown">Let's play</button>
<div class="dropdown-menu">
    <a class="dropdown-item" href="https://imgbb.com/">Action</a>
    <a class="dropdown-item" href="https://imgbb.com/">Another action</a>
  </div>
</div>
</div>
</div>
</div>
<div class="col-12 col-sm-6 col-lg-4">
<div class="card border-dark text-white bg-secondary">
<div class="card-body">
<a href="https://imgbb.com/"><img src="https://i.ibb.co/1J5Pr2D/gifgit-6.gif" alt="gifgit-6" border="0"/></a>
<h4 class="card-title">Queue</h4>
<div class="dropdown dropright">
<button onClick={() => {this.setState({ activeIndex: 4 })}}
        class={this.state.activeIndex === 4 ? "btn btn-success dropdown-toggle" : "btn btn-primary dropdown-toggle"} data-toggle="dropdown">Let's play</button>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="https://imgbb.com/">Action</a>
            <a class="dropdown-item" href="https://imgbb.com/">Another action</a>
          </div>
</div>
</div>
</div>
</div>
<div class="col-12 col-sm-6 col-lg-4">
  <div class="card border-light bg-warning text-white">
    <div class="card-body">
    <a href="https://imgbb.com/"><img src="https://i.ibb.co/b2XftRf/270f0c9a7cfb02a067f174412df4bb0b.gif" alt="270f0c9a7cfb02a067f174412df4bb0b" border="0"/></a>
    <h4 class="card-title">Array</h4>
    <div class="dropdown dropright">
    <button onClick={() => {this.setState({ activeIndex: 5 })}}
            class={this.state.activeIndex === 5 ? "btn btn-success dropdown-toggle" : "btn btn-primary dropdown-toggle"} data-toggle="dropdown">Let's play</button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="https://imgbb.com/">Action</a>
                <a class="dropdown-item" href="https://imgbb.com/">Another action</a>
              </div>
    </div>
  </div>
</div>
</div>
    </div>
  </div>
);
  }
}
