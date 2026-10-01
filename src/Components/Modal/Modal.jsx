import React, { Component, useRef } from "react";
import Draggable from "react-draggable";
import NewsList from "@Components/NewsList";
import "./Modal.scss";
export default class Modal extends Component {
  state = {
    myRef: React.createRef(),
    onPhone: navigator.userAgent.match(/Mobile/),
  };
  render() {
    const { myRef, onPhone } = this.state;
    const {
      country: {
        capitals = [{ name: "" }],
        flag = {
          url_svg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9ISmhSYTKzRiEUV6U_nsUeogrxncpF_kqZcGW9h2MQ&s",
          description: "",
        },
        government_type,
        population,
        subregion = "",
        region = "",
        descriptions = { short: "" },
        names = { common: "" },
      },
      articles = [],
      isLoading,
      areArticles,
      onClick,
    } = this.props;

    return (
      <Draggable
        nodeRef={myRef}
        positionOffset={{ x: "-50%", y: "-50%" }}
        disabled={onPhone && false}
        // allowMobileScroll={onPhone && true}
        axis={onPhone && "y"}
        bounds={{ top: -320, bottom: 20 }}
      >
        <div ref={myRef} className="Modal_wrapper">
          <div className="Modal_header-wrapper">
            <div className="Modal_title-wrapper">
              <h1>Country: {names.common}</h1>
              <h2>Capital:{capitals[0].name}</h2>
            </div>
            <img
              className="Modal_Flag"
              src={flag.url_svg}
              width={170}
              alt={flag.description}
            />
          </div>

          <div className="Modal_country-data-wrapper">
            <h2>Region:{region}</h2>
            <h3>Subregion: {subregion}</h3>
            <h4>Population: {population}</h4>
            <h5>Government: {government_type}</h5>
            <p>Descriptions: {descriptions.short}</p>
            <section className="Modal_news-section">
              <h1> News:</h1>
            </section>
          </div>
          <NewsList
            articles={articles}
            isLoading={isLoading}
            areArticles={areArticles}
            onClick={onClick}
          />
        </div>
      </Draggable>
    );
  }
}
