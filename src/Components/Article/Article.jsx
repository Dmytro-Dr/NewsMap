import React, { Component } from "react";

class Article extends Component {
  render() {
    const {
      article: {
        author = "",
        description = "",
        title = "",
        url = "",
        urlToImage = "1",
      },
    } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>Title: {title}</h1>
        <h2>Description: {description}</h2>
        <h3>Author </h3>
        <img src={urlToImage} width={200} alt={title} />
      </div>
    );
  }
}

export default Article;
