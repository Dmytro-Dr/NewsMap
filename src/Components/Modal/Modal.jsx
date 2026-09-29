import React, { Component, useRef } from "react";
import Draggable from "react-draggable";
import NewsList from "@Components/NewsList";
import "./Modal.scss";
export default class Modal extends Component {
  state = {
    myRef: React.createRef(),
    onPhone: navigator.userAgent.match(/Mobile/),
    problematicWidth: window.matchMedia("(max-width: 440px)"),
  };
  render() {
    const { myRef, onPhone, problematicWidth } = this.state;
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
    } = this.props;

    return (
      <Draggable
        nodeRef={myRef}
        defaultPosition={
          onPhone
            ? problematicWidth
              ? { x: -188, y: -478 }
              : { x: -180, y: -478 }
            : { x: -252, y: -321 }
        }
        disabled={onPhone && false}
        allowMobileScroll={onPhone && true}
        axis={onPhone && "y"}
        bounds={{ top: -700 }}
      >
        <div ref={myRef} className="Modal_wrapper">
          <div className="Modal-header_wrapper">
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
          </div>
          <NewsList articles={articles} />
        </div>
      </Draggable>
    );
  }
}
