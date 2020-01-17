import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import { food1 } from './../../Assets/image/food1.jpg'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import zomatoData from './../../zomatoData.json'
import Paper from '@material-ui/core/Paper';


export default class PlaceCollection extends Component {
  render() {
    return (
      <div>
        {zomatoData.map(collection => 
          <Grid item xs={6} style={{display: 'inline-flex' ,padding: '14px', cursor:'pointer'}}>    
         <Card style={{ display: 'flex' }}>
          <CardMedia style={{ width: '43%', margin:'5px' }}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={require(`./../../Assets/image/${collection.imageUrl}`)}
            title="Contemplative Reptile"
          />
          <div style={{ width: '57%' }}>
            <CardContent >
        <div style={{ fontSize: '20px', fontWeight: 600 }}>{collection.header}</div>
        <div style={{ fontSize: '14px' }}>{collection.desription}</div>
            </CardContent>
          </div>
        </Card>
        </Grid>
        )}
        <Grid item xs={12} className="shadow" style={{padding:'10px', cursor:'pointer'}}>
          <Paper style={{textAlign:'center'}}>All collection in pune</Paper>
        </Grid>
      
 {/* <Grid item xs={6} style={{display: 'inline-flex' ,padding: '14px'}}>
        <Card style={{ display: 'flex' }}>
          <CardMedia style={{ width: '43%' }}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={require(`./../../Assets/image/food1.jpg`)}
            title="Contemplative Reptile"
          />
          <div style={{ width: '57%' }}>
            <CardContent >
              <div style={{ fontSize: '20px', fontWeight: 600 }}>Trending This Week</div>
              <div style={{ fontSize: '14px' }}>Most popular restaurants in town this week</div>
            </CardContent>
          </div>
        </Card>
        </Grid> */}
        
      </div>

    )
  }
}
