import React, { Component } from 'react'
import './AdImage.css'
import offerZomato from './../../Assets/image/offer-zomato.jpeg'
import PlaceCollection from './../Place-collection/PlaceCollection'
import FoodOnline from './../Food-online/FoodOnline'

export default class AdImage extends Component {
    render() {
        return (
            <div style={{widht:'100%'}}>
            <div className="ad-size">
                <img style={{width:'100%'}}src={offerZomato} />
                <PlaceCollection />
            </div>
            <FoodOnline />
            </div>
        )
    }
}
