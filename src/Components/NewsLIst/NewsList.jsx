import React from "react";
import Article from "../Article";
const NewsList = ({ articles }) => {
  return (
    <ul>
      {articles.map((article, index) => (
        <li key={index}>
          <Article article={article} />
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
