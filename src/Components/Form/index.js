import React, { Component, Fragment } from "react";
import './index.css'

class Form extends Component {


    
  render() {
      const {newItem, message , displayMsg} = this.props;
    return (
    <Fragment>
        {/* <p>Form</p> */}
        <div className="content">
            <form onSubmit={this.props.add}>
                <input onChange={this.props.track} className="addTask" type="text" placeholder="Enter your next task"/>
                <button className="add">Add Task</button>
            </form>
            
           { (displayMsg)?
                (<p className="msg">{message}</p>) : <p>Add new task now!</p>
            }
        </div>
    </Fragment>
    )
  }
}

export default Form;