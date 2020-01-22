import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import './TaskStatus.css'


export default class TaskStatus extends Component {

  render() {
    return (
      <div className="status-button">
        <Button
          variant="contained"
          size="large"
          className={this.props.activeButton == 1 ? 'status-button_active' : 'status-button_inactive'}
          onClick={() => this.props.chageActiveButton('1')}
        >
          Pending </Button>
        <Button
          variant="contained"
          size="large"
          className={this.props.activeButton == 2 ? 'status-button_active' : 'status-button_inactive'}
          onClick={() => this.props.chageActiveButton('2')}

        >
          Complete</Button>
      </div>
    )
  }
}
