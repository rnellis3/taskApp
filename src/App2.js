import React, { Component } from "react";

class App2 extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: ''},
      tasks: [],
    };
    this.viewState = this.viewState.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
      }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '' },
    });
  };

  viewState(){
    console.log(this.state.tasks)
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
  onChange={this.handleChange}
  value={this.state.task.text}
  type="text"
  id="taskInput"
/>
          <button type="submit">
            Add Task
          </button>
        </form>
        <button onClick={this.viewState}>State</button>
      </div>
    );
  }
}

export default App2;