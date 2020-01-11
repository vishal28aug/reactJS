import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import SideNav from './component/side-nav/SideNav'
import UserDescription from './component/user-description/UserDescription'

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <SideNav/>
      <UserDescription/>
    </div>
    )
  }
}

