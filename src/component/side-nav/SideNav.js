import React, { Component } from 'react'
import './SideNav.css'
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

export default class SideNav extends Component {
    render() {

        return (
            <div className="sidebar">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
        )
    }
}
