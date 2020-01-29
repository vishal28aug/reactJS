import React, { Component } from 'react'
import './index.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class AddUser extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }
  }
  addUser = () => {
    let data = {
      name:this.state.name,
      email:this.state.salary
    }
    fetch(	'https://5e2d522a1b72860014dd5740.mockapi.io/js/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    this.setState({name:'',email:''})
  }

  handleChangeName = (event) => {
    this.setState({ name: event.target.value })
  }

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  render() {
    return (
      <div className="fields">
      ADD USER
        <TextField
          label="Name"
          variant="outlined"
          style={{ margin: '5px' }}
          value={this.state.name}
          onChange={this.handleChangeName} />

        <TextField
          label="Email"
          variant="outlined"
          style={{ margin: '5px' }}
          value={this.state.email}
          onChange={this.handleChangeEmail} />

        <Typography>
          <Button 
          variant="contained" 
          color="primary" 
          style={{ margin: '5px' }}
          onClick={this.addUser}>
            ADD USER </Button>
        </Typography>

      </div>
    )
  }
}
