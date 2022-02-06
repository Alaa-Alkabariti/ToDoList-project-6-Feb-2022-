import React, { Component, Fragment } from "react";
import "./index.css";

class Table extends Component {
  render() {
    const { toDoList , del , update} = this.props;
    return (
      <Fragment>
        {/* <p>Table</p> */}
        <div className="contentTable">
          <table className="styled-table">
            <thead>
              <tr>
                <th className="one">Task ID</th>
                <th className="two">Task Title</th>
                <th className="three">Actions</th>
              </tr>
            </thead>
            <tbody>
              {toDoList.map((el) => {
                return (
                  <tr key={el.id} className="active-row">
                    <td>{el.id}</td>
                    <td>{el.title}</td>
                    <td>
                      <button onClick={() => this.props.edit(el)}>Edit</button>
                      <button onClick={() => this.props.update(el)}>Update</button>
                      <button  onClick={() => this.props.del(el.id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

export default Table;
