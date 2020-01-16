import React, { Component } from 'react'
import './AdImage.css'
import offerZomato from './../../Assets/image/offer-zomato.jpeg'

export default class AdImage extends Component {
    render() {
        return (
            <div className="ad-size">
                <img style={{width:'100%'}}src={offerZomato} />
            </div>
        )
    }
}
