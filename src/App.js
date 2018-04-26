import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./Form";
import List from "./List";

const style = {
  padding: "20px 0"
};

class App extends Component {
  state = {
    tasks: []
  };
  handleAdd = data => {
    const tasks = this.state.tasks;
    tasks.push(data);
    this.setState({ tasks });
  };
  handleDelete = id => {
    const tasks = this.state.tasks;
    tasks.splice(id, 1);
    this.setState({ tasks });
  };
  render() {
    return (
      <div className="row" style={style}>
        <Form add={this.handleAdd} />
        <List del={this.handleDelete} tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
