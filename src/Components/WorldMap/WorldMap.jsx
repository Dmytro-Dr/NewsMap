import React, { Component } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./WorldMap.scss";
import "leaflet/dist/leaflet.css";
export default class WorldMap extends Component {
  state = {};

  render() {
    const key = import.meta.env.VITE_MAP_API;
    return (
      <MapContainer center={[48.8566, 2.3522]} zoom={3} zoomControl={false}>
        <TileLayer
          attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=${key}`}
        ></TileLayer>
      </MapContainer>
    );
  }
}
