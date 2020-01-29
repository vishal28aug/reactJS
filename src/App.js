import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Users from './components/users'
import Article from './components/articles'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedUser:'',
      isShowArticle:false
    }
  }

  openArticle =(selectedUser) =>{
    this.setState({selectedUser:selectedUser ,isShowArticle:true })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
     {this.state.isShowArticle ? 
      <Article selectedUser = {this.state.selectedUser}/>
     :  <Users state={this.state} openArticle={this.openArticle}/>
     }
    </div>
    )
  }
  // https://www.mockapi.io/projects/5e2d522a1b72860014dd5741
}

