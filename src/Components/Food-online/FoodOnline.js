import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import NearMeIcon from '@material-ui/icons/NearMe';
import AllOutIcon from '@material-ui/icons/AllOut';
import Button from '@material-ui/core/Button';
import './FoodOnline.css'

export default class FoodOnline extends Component {
  render() {
    return (
      <div className="foodOnline">
        <div stlye={{ fontsize: '20px', fontWeight: '600' }}>Order Food Online</div>
        Best Restaurants delivering to your doorstep
                <Paper >
          <div style={{ padding: '10px' }}>
            <div style={{ padding:'10px', fontsize: '18px', fontWeight: 600, alignText: 'center' }}>Enter Your deliver location</div>
            <Paper component="form" style={{display:'flex', border:'1px solid #85B7D9', alignItems:'center'}}>
              <NearMeIcon style={{paddingright:10}}/>
              <InputBase
                placeholder="Type delivert location here"
                inputProps={{ 'aria-label': 'Type delivert location here' }}
              />
              <Divider orientation="vertical" />
              <Button style={{paddingLeft:50}}>Detect<AllOutIcon/></Button>
            </Paper>
            <div style={{padding:'20px'}}>
            <Button variant="outlined" color="green"size="large" style={{left: '15px',height:'37px',width: '259px',color:'white', widht:'100px', backgroundColor:'#099E44'}}>
  Order Food Online!
</Button></div>
<div style={{paddingTop:'50px',paddingBottom:'50px', color:"#099E44"}}> use code ZOMATO to get up to 50% OFF. T&Cs apply.</div>
          </div>
        </Paper>

      </div>
    )
  }
}
