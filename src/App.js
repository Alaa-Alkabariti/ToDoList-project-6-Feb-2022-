import React, { Component, Fragment } from "react";
import MainLayout from "../src/Components/MainLayout";
import Form from "../src/Components/Form";
import Table from "../src/Components/Table";
import EditTwo from "../src/Components/EditTwo";
import "./App.css";
import { logDOM } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoList: [],
      newItem: "",
      message: "",
      displayMsg: false,
    };
    this.addTask = this.addTask.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.update = this.update.bind(this);
  }

  handleOnChange(event) {
    this.setState({ newItem: event.target.value });
    console.log(this.state.newItem);
  }

  addTask(event) {
    const { newItem, toDoList, message } = this.state;
    event.preventDefault();
    console.log("This is the addItem method");
    this.setState({ newItem: event.target.value });
    console.log("newItem", this.state.newItem);
    console.log("newItem idn", newItem.id); //omar 1 why undefined
    if (
      toDoList.filter((el) => el.title === newItem || el.id === newItem.id)
        .length
    ) {
      this.setState({
        message: "this task is already added",
        displayMsg: true,
      });
    } else if (newItem === "") {
      this.setState({
        message: "Please enter task before clicking add button",
        displayMsg: true,
      });
    } else {
      this.setState({
        toDoList: [
          ...this.state.toDoList,
          { title: newItem, id: toDoList.length + 1 },
        ],
      });
      this.setState({
        message: "new task added successfully",
        displayMsg: true,
      });
    }
    localStorage.setItem(
      "data",
      JSON.stringify([...toDoList, { id: toDoList.length + 1, title: newItem }])
    );
  }

  deleteItem(id) {
    console.log("delete item");
    const { newItem, toDoList, message } = this.state;
    const newList = this.state.toDoList.filter(
      (toDoItem) => toDoItem.id !== id
    );
    this.setState({ toDoList: newList });
  }

  deleteAll() {
    this.setState({ toDoList: [] });
    this.setState({ message: "Greate, You’ve done all your tasks" });
  }

  editItem = (oldObj) => {
    let oldTitle = oldObj.title;
    const { toDoList, newItem } = this.state; 
    const newTodo = toDoList.map((obj) =>
      obj.title === oldTitle ? { ...obj, title: newItem } : obj
    );
    this.setState({ toDoList: newTodo });
  };

  update(oldObj) {
    console.log('oldobj' , oldObj)
  }
  

   componentDidMount() {
    const localDataList = JSON.parse(localStorage.getItem("data")) || []; //if the list is empty then I’ll have no issues
    this.setState({ toDoList: localDataList });
  } 

  render() {
    const { newItem, toDoList, message, displayMsg } = this.state;
    return (
      <Fragment>
        <MainLayout />
        <Form
          newItem={newItem}
          message={message}
          toDoList={toDoList}
          displayMsg={displayMsg}
          add={this.addTask}
          track={(event) => this.handleOnChange(event)}
        />
        <Table
          newItem={newItem}
          toDoList={toDoList}
          del={this.deleteItem}
          edit={this.editItem}
          upd={this.update}
        />

        <div className="delete">
          <button className="deleteAllButton" onClick={() => this.deleteAll()}>
            Delete All
          </button>
        </div>

        <EditTwo className="Container" />
      </Fragment>
    );
  }
}

export default App;
