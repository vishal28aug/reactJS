import React, { Component } from 'react'
import './App.css';
import TaskStatus from './components/task-status/TaskStatus'
import AddTask from './components/add-task/AddTask'
import Task from './components/task/Task'
import Container from '@material-ui/core/Container';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeButton: '1',
      newTask: '',
      task: [
        { name: "Buy milk", status: 'pending' },
        { name: "Buy popcorn", status: 'pending' },
        { name: "Buy detergent", status: 'completed' },
        { name: "Buy choclate", status: 'pending' },
        { name: "Buy tshirt", status: 'completed' },
        { name: "Buy shoe", status: 'pending' },
        { name: "Buy bike", status: 'completed' },
        { name: "Buy car", status: 'pending' },
      ]
    }
  }

  addTask = (event) => {
    if (event.keyCode == '13') {
      let newTask = { name: event.target.value, status: 'pending' };
      let task = this.state.task.concat(newTask);
      this.setState({ task: task });
      event.target.value = ''
    }
  }

  changeActiveButton = (newActiveButton) => {
    this.setState({ activeButton: newActiveButton })
  }

  handleCheckboxChange = (index) => {
    let tasks = this.state.task;
    if (tasks[index])
      tasks[index].status == 'pending' ? tasks[index].status = 'completed' : tasks[index].status = 'pending'

    this.setState({ task: tasks })
  }

  render() {
    return (
      <div className="App">        
        <Container maxWidth="sm">
        <div className="todo-name">
        <img className = "todo-name__img" src={require('./assets/todo-png2.png')} />
        TODO APP
        </div>
          <TaskStatus activeButton={this.state.activeButton} chageActiveButton={this.changeActiveButton} />
          <AddTask addTask={this.addTask} newtask={this.state.newTask} />
          <Task state={this.state} handleCheckboxChange={this.handleCheckboxChange} />
        </Container>
      </div>
    )
  }
}

