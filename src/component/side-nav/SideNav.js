import React, { Component } from 'react'
import './SideNav.css'
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import myJson from './../../user.json'
import me from './../../assets/image/me1.png'


export default class SideNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedUser: ""
    }
  }
  selectUser(user) {
    console.log(user);
  }

  render() {

    return (
      <div>
        {/* Sidebar header stuff */}
        <div className="sidebar-header">
          <Avatar alt="Remy Sharp" src={me} />
          <div className="icon">
            <DonutLargeIcon style={{ margin: "8px 15px", cursor: "pointer" }} />
            <AnnouncementIcon style={{ margin: "8px 15px", cursor: "pointer" }} />
            <MoreVertIcon style={{ margin: "8px", cursor: "pointer" }} />
          </div>
        </div>

        {/* Sidebar search field stuff */}
        <div className="search-field">
          <div className="field">
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              style={{ width: 321 }}
              placeholder="search or start a new chat"
              inputProps={{ 'aria-label': 'search or start a new chat' }}
            />
          </div>
        </div>

        {/* Sidebar user list stuff */}
        <div className="list" style={{ cursor: "pointer" }}>
          {myJson.map(user =>
            <ListItem alignItems="flex-start" onClick={() => this.props.action(user)}>
              <ListItemAvatar>
                <Avatar alt={user.name} src={require(`./../../assets/image/${user.id}.jpg`)} />
              </ListItemAvatar>
              <ListItemText
                primary={user.name}
                secondary={user.description}
              />
            </ListItem>
          )}
        </div>
      </div>
    )

  }
}
