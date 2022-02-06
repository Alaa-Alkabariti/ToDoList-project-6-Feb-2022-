import React, { Component, Fragment } from "react";
import "./index.css";
import logo from '../../images/logo.png'

class MainLayout extends Component {
  render() {
    return (
      <Fragment>
        {/* <p>MainLayout</p> */}
         <div className=" Container">
             <h1>To Do List</h1>
             <img src={logo} alt="to do list logo" />
         </div>
      </Fragment>
    );
  }
}

export default MainLayout;
