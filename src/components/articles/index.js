import React, { Component } from 'react';
import './index.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AddArticle from './../add-article'

export default class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      article: []
    }
    this.getArticles()
    console.log(this.props)
  }

  getArticles = () =>{
    fetch('https://5e2d522a1b72860014dd5740.mockapi.io/js/article')
    .then(response =>{
      return response.json();
    })
    .then( response =>{
     
      this.setState({article:response.filter(article => article.author === this.props.selectedUser.id)})
    })
  }

  render() {
    return (
      <div>
        <span className="user-author">Welcome {this.props.selectedUser.name}</span>
      <div className="article-page">      
        <div className="add-article">
        <AddArticle authorId={this.props.selectedUser.id} getArticle={this.getArticles}/>
        </div>
        
        <div className="article-list">
        <span className='article-heading'>ARTICLES LIST</span>
        {this.state.article.map( (article, index) => 
        <Card className="card-details" key={index}>
          <div >
            <CardContent >
              <Typography component="h5" variant="h5">
               TITLE: {article.title}
             </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                ARTICLE ID: {article.id}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                AUTHOR: {article.author}
            </Typography>
            </CardContent>
          </div>
        </Card>
        )}
        </div>
      </div>
      </div>
    )
  }
}
