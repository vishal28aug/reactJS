import React, { Component } from 'react';
import './index.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AddUser from './../add-user';

export default class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
    this.getUser()
  }

  getUser = () =>{
    fetch('https://5e2d522a1b72860014dd5740.mockapi.io/js/user')
    .then(response =>{
      return response.json();
    })
    .then( response =>{
      this.setState({users:response})
    })
  }

  render() {
    return (
      <div className="user-page">
        <div className="add-user">
        <AddUser />
        </div>
        <div className="user-list">
        {this.state.users.map( (user, index) => 
        <Card className="card-details" key={index} onClick={this.props.openArticle(user.id)}>
          <div >
            <CardContent >
              <Typography component="h5" variant="h5">
               NAME: {user.name}
             </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                ID: {user.id}
            </Typography>
            </CardContent>
          </div>
          <CardMedia
            image={user.avatar}
            title="Live from space album cover"
          />
        </Card>
        )}
        </div>
      </div>
    )
  }
}
