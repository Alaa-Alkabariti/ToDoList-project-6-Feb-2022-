import React, { Component, Fragment } from "react";
import "./index.css";
/* import '../MainLayout/index.css' */   //omar 2 classname

class EditTwo extends Component {
  render() {
    return (
      <Fragment>
         <div className="editResult Container">
         <h3>Update Task Title</h3>
             <form>
             <input type="text" />
             <button  className="add">Update</button>
             </form>
         </div>
      </Fragment>
    );
  }
}

export default EditTwo;
