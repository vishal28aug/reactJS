import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import './TaskStatus.css'
import stateData from './../../AppState'

export default class TaskStatus extends Component {
    changeActiveButton =(activeBtn) =>{
        stateData.changeActiveButton(activeBtn);
        this.render();
    }

    render() {
        console.log('dfdf',stateData.getActiveButton())
        return (
            <div className="status-button">
                <Button
                    variant="contained"
                    size="large"
                    className={stateData.getActiveButton() == 1 ? 'status-button_active' : 'status-button_inactive'}
                    onClick={() => this.changeActiveButton('1')}
                >
                    Pending </Button>
                <Button
                    variant="contained"
                    size="large"
                    className={stateData.getActiveButton() == 2 ? 'status-button_active' : 'status-button_inactive'}
                    onClick={ () => this.changeActiveButton('2')}

                >
                    Complete</Button>
            </div>
        )
    }
}
