import React, { Component } from "react";
import NewsList from '@Components/NewsList'
export default class Modal extends Component {
  render() {
    const {
      country: {
        capitals = [{ name: "" }],
        flag = { url_png: "1", description: "" },
        government_type,
        population,
        subregion = "",
        region = "",
        descriptions = { short: "" },
        names = { common: "" },
      },
      articles = [],
    } = this.props;
    return (
      <div
        style={{
          zIndex: 1000,
          backgroundColor: "red",
          position: "fixed",
          top: 50,
          right: 100,
          height: "400px",
          overflow: "scroll"
        }}
      >
        <h1 style={{ color: "white", fontSize: "2em" }}>
          Country: {names.common}, Capital:{capitals[0].name}
        </h1>
        <h2>
          Region:{region} Subregion: {subregion}
        </h2>
        <h3>Descriptions: {descriptions.short}</h3>
        <h4>Population: {population}</h4>
        <h5>Government: {government_type}</h5>
        <img src={flag.url_png} width={200} alt={flag.description} />
        <NewsList articles={articles} />
      </div>
    );
  }
}
