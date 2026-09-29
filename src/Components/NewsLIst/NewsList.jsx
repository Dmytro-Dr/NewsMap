import React from "react";
import "./NewsList.scss";
import Article from "../Article";
const NewsList = ({ articles }) => {
  return (
    <ul className="NewsList">
      News:
      {articles.map((article, index) => (
        <li key={index}>
          <Article article={article} />
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
