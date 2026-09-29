import React, { Component } from "react";
import "./Article.scss";
class Article extends Component {
  render() {
    const {
      article: {
        author = "",
        description = "",
        title = "",
        url = "",
        urlToImage = "1",
        source: { name },
      },
    } = this.props;
    console.log(this.props);
    return (
      <div className="Article_wrapper">
        <a href={urlToImage} referrerPolicy="no-referrer">
          <img
            className="Article_image"
            src={urlToImage}
            width={400}
            alt={title}
          />
        </a>
        <a href={url}>
          <h1>Title: {title}</h1>
        </a>
        <p>Description: {description}</p>
        <h3>
          Source: 
          <a href={author} referrerPolicy="no-referrer">
            {name}
          </a>
        </h3>
      </div>
    );
  }
}

export default Article;
