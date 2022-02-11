import React from 'react';
import "./home.css";
import Tree1 from "../treecomponent/bfs";
import Tree2 from "../treecomponent/dfs";
import Tree3 from "../treecomponent/inorder";
import Tree5 from "../treecomponent/preorder";
import Tree4 from "../treecomponent/postorder";

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
<div class="card border-secondary text-white bg-success">
  <div class="card-body">
<a href="https://imgbb.com/"><img src="https://i.ibb.co/mqxv9nW/gifgit-11.gif" alt="gifgit-11" border="0"/></a>
  <h4 class="card-title">DepthFirstSearch</h4>
  <div class="dropdown dropright">
  <button onClick={() => {this.setState({ activeIndex: 1 })}}
  class={this.state.activeIndex === 1 ? "btn btn-success dropdown-toggle" : "btn btn-primary dropdown-toggle"} data-toggle="dropdown">Let's play</button>
  <div class="dropdown-menu">
      <a class="dropdown-item" href="/dfs">DepthFirstSearch</a>
    </div>
  </div>
</div>
</div>
</div>
<div class="col-12 col-sm-6 col-lg-4">
<div class="card border-dark text-white bg-danger">
  <div class="card-body">
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/YNrn7Rd/gifgit-12.gif" alt="gifgit-12" border="0"/></a>
  <h4 class="card-title">BreadthFirstSearch</h4>
  <div class="dropdown dropright">
  <button onClick={() => {this.setState({ activeIndex: 2 })}}
  class={this.state.activeIndex === 2 ? "btn btn-success dropdown-toggle" : "btn btn-primary dropdown-toggle"} data-toggle="dropdown">Let's play</button>
  <div class="dropdown-menu">
      <a class="dropdown-item" href="/bfs">BreadthFirstSearch</a>
    </div>
  </div>
</div>
</div>
</div>
<div class="col-12 col-sm-6 col-lg-4">
<div class="card border-dark text-white bg-info">
<div class="card-body">
<a href="https://imgbb.com/"><img src="https://i.ibb.co/86fGpWn/gifgit-13.gif" alt="gifgit-13" border="0"/></a>
<h4 class="card-title">PreorderTraversal</h4>
<div class="dropdown dropright">
<button onClick={() => {this.setState({ activeIndex: 0 })}}
class={this.state.activeIndex === 0 ? "btn btn-success dropdown-toggle" : "btn btn-primary dropdown-toggle"} data-toggle="dropdown">Let's play</button>
<div class="dropdown-menu">
    <a class="dropdown-item" href="/preorder">PreorderTraversal</a>
  </div>
</div>
</div>
</div>
</div>
</div>
<div class="row row-margin-05 d-flex justify-content-center">
<div class="col-12 col-sm-6 col-lg-4">
<div class="card border-dark text-white bg-secondary">
<div class="card-body">
<a href="https://imgbb.com/"><img src="https://i.ibb.co/qJZfn1X/gifgit-14.gif" alt="gifgit-14" border="0"/></a>
<h4 class="card-title">InorderTraversal</h4>
<div class="dropdown dropright">
<button onClick={() => {this.setState({ activeIndex: 3 })}}
        class={this.state.activeIndex === 3 ? "btn btn-success dropdown-toggle" : "btn btn-primary dropdown-toggle"} data-toggle="dropdown">Let's play</button>
        <div class="dropdown-menu">
        <a class="dropdown-item" href="/inorder">InorderTraversal</a>
          </div>
</div>
</div>
</div>
</div>
<div class="col-12 col-sm-6 col-lg-4">
  <div class="card border-light bg-warning text-white">
    <div class="card-body">
    <a href="https://imgbb.com/"><img src="https://i.ibb.co/BGK2kBb/gifgit-15.gif" alt="gifgit-15" border="0"/></a>
    <h4 class="card-title">PostorderTraversal</h4>
    <div class="dropdown dropright">
    <button onClick={() => {this.setState({ activeIndex: 4 })}}
            class={this.state.activeIndex === 4 ? "btn btn-success dropdown-toggle" : "btn btn-primary dropdown-toggle"} data-toggle="dropdown">Let's play</button>
            <div class="dropdown-menu">
            <a class="dropdown-item" href="/postorder">PostTraversal</a>
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
