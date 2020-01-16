import React, { Component } from 'react'
import './Headers.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import mobileIcon from './../../Assets/image/header-mobile'


export default class Headers extends Component {

  render() {
    return (
  
        <div style={{ flexGrow: 1 , top: 0}}>
          <AppBar position="static" color="inherit">
            <Toolbar variant="dense">
              
                <div className="header-navbar">
                  <img className="header-item1" src={require('./../../Assets/image/header-mobile.svg')} />
                  <span className="header-item1-label">Get the App</span>
                </div>
                <div style={{ position: 'absolute', right:0 }} className="header-right-items">
                  <div className="header-navbar">
                    <img className="header-item1" src={require('./../../Assets/image/order-online.svg')} />
                    <span className="header-item1-label">Order Food</span>
                  </div>
                  <div className="header-navbar">
                    <img className="header-item1" src={require('./../../Assets/image/book-a-table.svg')} />
                    <span className="header-item1-label">Book a Table</span>
                  </div>
                  <div className="header-navbar">
                    <img className="header-item1" src={require('./../../Assets/image/header_gold_icon.svg')} />
                    <span className="header-item1-label">Zomato Gold</span>
                  </div>
                </div>
             
            </Toolbar>
          </AppBar>
        </div>
     
    )
  }
}
