import React, { Component } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import ChangeView from "./ChangeView";
import "./WorldMap.scss";
import "leaflet/dist/leaflet.css";

export default class WorldMap extends Component {
  render() {
    const key = import.meta.env.VITE_MAP_API;
    const {
      country: { coordinates = { lat: 39, lng: 35 } },
    } = this.props;
    const position = [coordinates.lat, coordinates.lng];
    return (
      <MapContainer
        center={position}
        zoom={5}
        minZoom={5}
        zoomControl={false}
        dragging={false}
      >
        <ChangeView center={position} zoom={5} />
        <TileLayer
          attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=${key}`}
        ></TileLayer>
      </MapContainer>
    );
  }
}
