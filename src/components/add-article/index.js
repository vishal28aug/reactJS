import React, { Component } from 'react'
import './index.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class AddArticle extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      author: this.props.authorId,
      content: ''
    }
  }
  addArticle = () => {
    let data = {
      title: this.state.title,
      author: this.state.author,
      content: this.state.content

    }
    fetch('https://5e2d522a1b72860014dd5740.mockapi.io/js/article', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(() =>{
      this.props.getArticle();
    })
    this.setState({title:'',author:'',content:''})
  }

  handleChangeTitle = (event) => {
    this.setState({ title: event.target.value })
  }

  handleChangeContent = (event) => {
    this.setState({ content: event.target.value })
  }

  render() {
    return (
      <div className="fields">
        <span className='add-article'>ADD ARTICLE</span>
        <TextField
          label="title"
          variant="outlined"
          style={{ margin: '5px' }}
          value={this.state.title}
          onChange={this.handleChangeTitle} />

        <TextField
          label="Content"
          variant="outlined"
          style={{ margin: '5px' }}
          value={this.state.content}
          onChange={this.handleChangeContent} />

        <Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: '5px' }}
            onClick={this.addArticle}>
            ADD ARTICLE </Button>
        </Typography>

      </div>
    )
  }
}
