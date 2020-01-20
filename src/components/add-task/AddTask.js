import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';


export default class AddTask extends Component {
 
    render() {
        return (
            <div>
          <TextField
          id="outlined-full-width"
          label="Add a Task"
          placeholder="Enter a task to do then press enter button to add"         
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"         
        />
            </div>
        )
    }
}
