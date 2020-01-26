import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import DisplayData from './components/displayData/DisplayData';
import PostData from './components/post-data/PostData';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.getData();
    this.state = {
      employeesData: [],
      addEmployee :{
        name:'',
        salary:'',
        age:''
      }
    }
  }

  getData = () => {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        if (myJson.data)
          this.setState({ employeesData: myJson.data })
      });
  }

  postData = () => {
    let data = {
      name:this.state.addEmployee.name,
      salary:this.state.addEmployee.salary,
      age:this.state.addEmployee.age,
    }
    fetch(	'http://dummy.restapiexample.com/api/v1/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'cookie':'PHPSESSID=eb7264028de3903238a7769483b74216'
      },
      body: data
    }).then((response) => {
      console.log(response)
      return response.json
    }).then((response) =>{
      console.log(response);
    });
  }

  hnadleNameChange = (event) =>{
    let addEmployee = this.state.addEmployee;
    addEmployee.name = event.target.value;
    this.setState({addEmployee})
  }

  hnadlesSalaryChange = (event) =>{
    let addEmployee = this.state.addEmployee;
    addEmployee.salary = event.target.value;
    this.setState({addEmployee})
  }

  hnadleAgeChange = (event) =>{
    let addEmployee = this.state.addEmployee;
    addEmployee.age = event.target.value;
    this.setState({addEmployee})
  }

  render() {
    return (
      <div className="App">
        <PostData 
        createEmployee = {this.state.addEmployee} 
        hnadleNameChange ={this.hnadleNameChange}
        hnadlesSalaryChange ={this.hnadlesSalaryChange}
        hnadleAgeChange ={this.hnadleAgeChange}
        addData ={this.postData}/>

        <DisplayData employeesData={this.state.employeesData} />
      </div>
    )
  }
}

