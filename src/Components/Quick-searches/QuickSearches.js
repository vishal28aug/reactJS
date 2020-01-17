import React, { Component } from 'react'
import './QuickSearches.css'
import Paper from '@material-ui/core/Paper';

export default class QuickSearches extends Component {
    render() {
        return (
            <div style={{display: 'table',paddingTop:'40px',paddingBottom:'20px'}} className="quicksearch-wrapper">
               <div style={{fontSize:'20px', fontWeight:600}}> Quick Searches </div>
Discover restaurants by type of meal
<Paper style={{display:'flex', alignItems:'center'}}> 
<img className="quicksearch-img" src={require('./../../Assets/image/category_1.png')} />
<img className="quicksearch-img" src={require('./../../Assets/image/category_3.png')} />

<img className="quicksearch-img" src={require('./../../Assets/image/category_6.png')} />

<img className="quicksearch-img" src={require('./../../Assets/image/category_8.png')} />

<img className="quicksearch-img" src={require('./../../Assets/image/category_9.png')} />

<img className="quicksearch-img" src={require('./../../Assets/image/category_10.png')} />

<img className="quicksearch-img" src={require('./../../Assets/image/category_13.png')} />



</Paper>
            </div>
        )
    }
}
