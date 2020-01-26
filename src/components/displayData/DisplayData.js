import React, { Component } from 'react'
import './DisplayData.css'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class DisplayData extends Component {

  render() {
    return (
      <div>{
        this.props.employeesData.map((employee, index) =>
          <Card key={index} className="card">
            <CardContent>
              <Typography>
                NAME: {employee.employee_name}
              </Typography>
              <Typography>
                AGE: {employee.employee_age}
              </Typography>


            </CardContent>
            <CardActions>
              <Button size="small">EDIT</Button>
            </CardActions>
          </Card>
        )}
      </div>
    )
  }
}
