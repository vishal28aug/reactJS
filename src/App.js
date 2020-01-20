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
      task: [
        { name: "Buy milk", status: 'pending' },
        { name: "Buy a", status: 'pending' },
        { name: "Buy b", status: 'completed' },
        { name: "Buy x", status: 'pending' },
        { name: "Buy f", status: 'completed' },
        { name: "Buy d", status: 'pending' },
        { name: "Buy g", status: 'completed' },
        { name: "Buy h", status: 'pending' },
      ]
    }
  }

  addTask= (newTask) =>{
    var newTask = { name:newTask, status:'pending' };
    this.setState({ task: this.state.task.concat(newTask) });
// var newStateArray = this.state.task.slice();
// newStateArray.push(newTask);
// this.setState(task : newStateArray);
  }

  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
        <TaskStatus/>
        <AddTask />
          <Task />          
        </Container>

      </div>
    )
  }
}

