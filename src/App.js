import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import SideNav from './component/side-nav/SideNav'
import UserDescription from './component/user-description/UserDescription'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser:""
    };

    this.sideNavHandler = this.sideNavHandler.bind(this)
}

sideNavHandler(selectedUser) {
  console.log('Previous Parent State: ', this.state);
  this.setState({
    selectedUser: selectedUser
  },() => console.log('Updated Parent State:', this.state));
}


  render() {
    return (
      <div className="App">
        <div className="sidebar">
      <SideNav action={this.sideNavHandler}/>
      </div>
      <div className="description">
      <UserDescription selectedUser = {this.state}/>
      </div>
    </div>
    )
  }
}

