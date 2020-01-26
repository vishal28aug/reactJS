import React, { Component } from 'react';
import './PostData.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export default class PostData extends Component {
  render() {
    return (
      <div >
        <form className="add-employee">
          <TextField 
          label="name" 
          variant="outlined" 
          className="fields" 
          value ={this.props.createEmployee.name}
          onChange={this.props.hnadleNameChange}/>

          <TextField 
          label="salary"
          variant="outlined" 
          className="fields"
          value ={this.props.createEmployee.salary}
          onChange={this.props.hnadlesSalaryChange}/>

          <TextField 
          label="age"
          variant="outlined" 
          className="fields"
          value ={this.props.createEmployee.age}
          onChange={this.props.hnadleAgeChange}/>

          <Button variant="contained" color="primary" onClick={this.props.addData}> ADD Employee </Button>
        </form>
      </div>
    )
  }
}
