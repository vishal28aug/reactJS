import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Users from './components/users'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedUser:'',
      isShowArticle:false
    }
  }

  openArticle =(selectedUser) =>{
    console.log(this.state)

    this.setState({selectedUser ,isShowArticle:true })
    // this.setState({isShowArticle: true})
    console.log(this.state)
  }
  render() {
    return (
      <div className="App">
     <Users state={this.state} openArticle={() => this.openArticle}/>
    </div>
    )
  }
}

