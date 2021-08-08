import React from 'react';
import Overview from './Overview'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      task: '',
      taskList: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.viewState = this.viewState.bind(this)
  }

  handleChange(event){
    event.preventDefault()
    const inputValue = document.getElementById('textValue').value
    console.log(inputValue)
    // const {value} = event.target
    this.setState({
      taskList: [...this.state.taskList, inputValue]
    })
    console.log('click')
  }

  viewState(){
    console.log(this.state.taskList)
  }


  render(){
    const tasks = this.state.taskList.map(task => <Overview list={task}/>)
    return (
      <div>
        <h1>Hello there</h1>
        <form onSubmit={this.handleChange}>
        <input
        type='text'
        name='task'
        placeholder="enter task"
        id='textValue'
        />
        <button>Submit</button>

        </form>

        <button onClick={this.viewState}>State</button>
        {/* <button onClick={this.handleChange}>Enter Task</button> */}

        {tasks}

      {/* <p>Your name: {this.state.taskList}</p> */}
      </div>

      //handles the input
    );
  }

}

export default App;
