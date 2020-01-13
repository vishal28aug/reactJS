import React, { Component } from 'react'
import './UserDescription.css'
import whatsAppImage from './../../assets/image/whatsaap-connect.jpg'
import whatsAppBg from './../../assets/image/whatsaap-bg2.jpg'
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InputBase from '@material-ui/core/InputBase';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

export default class UserDescription extends Component {
  render() {
    console.log(this.props);
    if (!this.props.selectedUser.selectedUser) {

      // Return if no user is selected
      return (
        <div>
          <img src={whatsAppImage} />
        </div>
      )
    }

    // Return when user is selected
    return (
      <div style={{ backgroundImage: ` url(${whatsAppBg})`, height: "100%" }}>

        {/* Description header stuff */}
        <div className="description-header">
          <Avatar alt={this.props.selectedUser.selectedUser.name} src={require(`./../../assets/image/${this.props.selectedUser.selectedUser.id}.jpg`)} />
          <div className="name">{this.props.selectedUser.selectedUser.name}</div>

          <div className="icon">
            <SearchIcon style={{ margin: "8px 15px", cursor: "pointer" }} />
            <AttachFileIcon style={{ margin: "8px 15px", cursor: "pointer" }} />
            <MoreVertIcon style={{ margin: "8px", cursor: "pointer" }} />
          </div>
        </div>

        {/* Description details stuff */}
        <p style={{ textAlign: "center" }}> {this.props.selectedUser.selectedUser.description} </p>

        {/* Description bottom field stuff */}
        <div className="search-field" style={{ position: "absolute", bottom: 0 }}>
          <InsertEmoticonIcon style={{ padding: 4 }} />
          <div className="field">
            <InputBase
              style={{ width: 888 }}
              placeholder="Type a message"
              inputProps={{ 'aria-label': 'Type a message' }}
            />
          </div>
          <MicIcon style={{ padding: 5 }} />
        </div>
      </div>
    )

  }
}
