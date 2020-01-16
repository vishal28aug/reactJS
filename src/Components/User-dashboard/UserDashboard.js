import React, { Component } from 'react'
import './UserDashboard.css'
import HeaderBg from './../../Assets/image/pizza3.jpg'
import Button from '@material-ui/core/Button';
import zomatoLogo from './../../Assets/image/zomato_flat_bg_logo.svg'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import NearMeIcon from '@material-ui/icons/NearMe';
import Paper from '@material-ui/core/Paper';

export default class UserDashboard extends Component {

    places = [
        { name: "pune" },
        { name: "viman nagar" },
        { name: "wakad" },
        { name: "pcmc" },
    ]
    render() {
        return (

            <div style={{ backgroundImage: ` url(${HeaderBg})` }} className="dashboard-backgroud">
                <div className="login-create">
                    <a className="login" href="#">Log in</a>
                    <Button variant="outlined" style={{ border: "2px solid white", color: "white", fontWeight: 600 }}>
                        Create an account      </Button>
                </div>
                <div className="dashboard-fields-option">
                    <div className="dashboard-icon">
                        <img src={zomatoLogo} />
                    </div>
                    <div className="dashboard-font">Find the best restaurants, cafés, and bars in Pune</div>
                
                <div className="dashboard-field">
                    <Autocomplete id="places-select-demo"
                        style={{ width: '180px', color: 'white', border: 'white', height:'49px' }}
                        options={this.places}

                        getOptionLabel={option => option.name}
                        renderOption={option => (
                            <React.Fragment>
                                {option.name}
                            </React.Fragment>
                        )}
                        renderInput={params => (
                            <Paper component="form" style={{display:'flex', alignItems:'center'}}>
                                <NearMeIcon />
                            <TextField
                            
                                style={{ border: '0px', backgroundColor: 'white', color: 'black' }}
                                fullWidth
                                {...params}
                                label="Lcoation"
                                variant="outlined"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                                color='black'
                            />
                            /</Paper>
                        )}
                    />
                    <Autocomplete
                        style={{ width: '580px', color: 'white', border: 'white',padding:10 }}

                        id="free-solo-demo"
                        freeSolo
                        options={this.places}
                        getOptionLabel={option => option.name}
                        renderInput={params => (
                            <TextField 
                            style={{backgroundColor:'white'}}
                            {...params} label="Search for restaurants or cuisines.." margin="normal" variant="outlined" fullWidth />
                        )}
                    />
                     <Button variant="contained" color="secondary">
        Search
      </Button>
                </div>
                </div>
            </div>

        )
    }
}
