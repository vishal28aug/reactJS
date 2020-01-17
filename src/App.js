import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Headers from './Components/Headers/Headers'
import UserDashboard from './Components/User-dashboard/UserDashboard'
import AdImage from './Components/Ad-image/AdImage'
import QuickSearches from './Components/Quick-searches/QuickSearches'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Headers />
        <UserDashboard/>
        <div className="zomato-offer-collection">
        <AdImage />       
        </div>
      <QuickSearches />
        
      </div>
    )
  }
}

