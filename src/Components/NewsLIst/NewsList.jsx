import React from "react";
import "./NewsList.scss";
import Article from "@Components/Article";
import Button from "@Components/Button";
const NewsList = ({ articles, isLoading, areArticles, onClick }) => {
  return (
    <ul className="NewsList">
      {articles.map((article, index) => (
        <li key={index}>
          <Article article={article} />
        </li>
      ))}
      {areArticles && isLoading === false && <Button onClick={onClick} />}
    </ul>
  );
};

export default NewsList;
