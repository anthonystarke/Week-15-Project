import React, {Component} from "react";

  class EditArticle extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: props.article.id,
        title: props.article.title,
        text: props.article.text,
        datePublished: props.article.datePublished,
        image: props.article.image,
        journalist: props.article.journalist,
        category: props.article.category
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
      evt.preventDefault();
      const article = {
        "id": this.state.id,
        "title": this.state.title,
        "text": this.state.text,
        "datePublished": this.state.datePublished,
        "image": this.state.image,
        "journalist": this.state.journalist,
        "category": this.state.category
      }
      console.log(article);
      this.props.saveArticle(article);
    }


    render() {
      return (
        <div>
        <form onSubmit = {this.handleSubmit} >
        <input type = "text" value = {this.state.title} name = "title" onChange = {evt => this.setState({title: evt.target.value})}/>
        <br/>
        <input type = "text" value = {this.state.text} name = "text" onChange = {evt => this.setState({text: evt.target.value})}/>
        <br/>
        <input type = "text" value = {this.state.datePublished} name = "date" onChange = {evt => this.setState({datePublished: evt.target.value})}/>
        <br/>
        <select name = "category">
        <option value = "health" > Health </option>
        <option value = "community" > Community </option>
        <option value = "controversy" > Controversy </option>
        <option value = "education" > Education </option>
        <option value = "career-news" > Career News </option>
        </select>
        <button type = "submit"> Save </button>
        </form>
        </div>
      )
    }

  }

export default EditArticle;
