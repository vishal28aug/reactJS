import React, { Component } from 'react'
import './Footer.css'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Divider from '@material-ui/core/Divider';

export default class Footer extends Component {
  language = [
    { language: 'English', year: 1994 },
    { language: ' german', year: 1972 },
    { language: ' spanish', year: 1974 },
    { language: ' Hindi', year: 2008 },
    { language: ' chineese', year: 1957 },
  ]
  render() {
    return (
      <div className="footer">
        <div className="footer-wraper">
          <div style={{ display: 'flex' }}>
            <Grid item xs={9}>
              <img style={{ width: '70px' }} src="/static/media/zomato_flat_bg_logo.fe872416.svg" />
            </Grid>
            <Grid item xs={3}>
              <Autocomplete
                id="combo-box-demo"
                options={this.language}
                getOptionLabel={option => option.language}
                style={{ width: 200, color: 'white' }}
                renderInput={params => (
                  <TextField {...params} label="Combo box" variant="outlined" fullWidth />
                )}
              />
            </Grid>
          </div>
          <Divider style={{ backgroundColor: '#3C3F46' }} />
          <div style={{ display: 'flex', color: '#ADB0B6', paddingTop: '20px', paddingBottom: '20px' }}>
            <Grid item xs={3}>
              <div style={{ fontSize: '18px', fontWeight: 600 }}>About Zomato </div>
              <div>About Us </div>
              <div>Culture </div>
              <div>Blog </div>
              <div>Careers </div>
              <div>Contact </div>
            </Grid>
            <Grid item xs={3}>
              <div style={{ fontSize: '18px', fontWeight: 600 }}>For Foodies </div>
              <div>Code of Conduct </div>
              <div>Community </div>
              <div>Verified Users </div>
              <div>Blogger Help </div>
              <div>Developers </div>
              <div>Mobile Apps</div>
            </Grid>
            <Grid item xs={3}>
              <div style={{ fontSize: '18px', fontWeight: 600 }}>For Restaurants </div>
              <div>Add a Restaurants </div>
              <div>Claim your Listing </div>
              <div>Business App </div>
              <div>Business Owner Guidelines </div>
              <div>Business Blog </div>
              <div>Restaurant Widgets</div>
            </Grid>
            <Grid item xs={3}>
              <div>Advertise </div>
              <div>Order </div>
              <div>RBook</div>
            </Grid>
          </div>

          <Divider style={{ backgroundColor: '#3C3F46' }} />
          <div style={{ display: 'flex', color: '#ADB0B6', paddingTop: '20px', paddingBottom: '20px' }}>
            <Grid item xs={2}>
              <div>Australia </div>
              <div>Brasil </div>
              <div>Canada </div>
              <div>Chile </div>
              <div>Czech Republic </div>

            </Grid>
            <Grid item xs={2}>
              <div>Australia </div>
              <div>Brasil </div>
              <div>Canada </div>
              <div>Chile </div>
              <div>Czech Republic </div>


            </Grid>
            <Grid item xs={2}>
              <div>Australia </div>
              <div>Brasil </div>
              <div>Canada </div>
              <div>Chile </div>
              <div>Czech Republic </div>


            </Grid>
            <Grid item xs={2}>
              <div>Australia </div>
              <div>Brasil </div>
              <div>Canada </div>
              <div>Chile </div>
              <div>Czech Republic </div>


            </Grid>
            <Grid item xs={2}>
              <div>Australia </div>
              <div>Brasil </div>
              <div>Canada </div>
              <div>Chile </div>
              <div>Czech Republic </div>


            </Grid>
          </div>
          <Divider style={{ backgroundColor: '#3C3F46' }} />
          <div style={{ display: 'flex', color: '#ADB0B6', paddingTop: '20px', paddingBottom: '20px' }}>
            privacy
  </div>

        </div>
      </div>
    )
  }
}
