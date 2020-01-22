import React, { Component } from 'react'
import './Task.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default class Task extends Component {

  getTask = () => {
    return (this.props.state.task.map((task, index) =>
      this.props.state.activeButton == '1' && task.status == 'pending' ?
        <Paper className="paper" key={index} >
          <Grid container wrap="nowrap" spacing={2}>
            <input type="checkbox" onChange={() => this.props.handleCheckboxChange(index)} />
            <span className="paper__label"> {task.name} </span>
          </Grid>
        </Paper>
        :
        this.props.state.activeButton == '2' && task.status == 'completed' ?
          <Paper className="paper" key={index} >
            <Grid container wrap="nowrap" spacing={2}>
              <input type="checkbox" onChange={() => this.props.handleCheckboxChange(index)} />
              <span className="paper__label"> {task.name} </span>
            </Grid>
          </Paper>
          : null
    ))
  }

  render() {
    return (
      <div>
        {this.getTask()}
      </div >
    )
  }
}
