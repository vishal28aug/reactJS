import React, { Component } from 'react'
import TaskStatus from './../task-status/TaskStatus'
import './Task.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import AddTask from './../add-task/AddTask'
import stateData from './../../AppState'
export default class Task extends Component {
  render() {
    return (
      <div>       
        
        {
        stateData.getStateTask().map((task, index) =>
        <Paper className="paper" key={index}>
          <Grid container wrap="nowrap" spacing={2}>
            <input type="checkbox" />
            <span className="paper__label"> {task.name} </span>
          </Grid>
        </Paper>     
        )
        }
      </div >
    )
  }
}
