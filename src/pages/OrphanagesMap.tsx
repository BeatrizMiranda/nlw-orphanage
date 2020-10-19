import React from "react";
import LocationState from "../components/LocationState";

import mapPin from "../images/mapPin.svg";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "../styles/pages/OrphanagesMap.css";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapPin} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer className="location">
          <LocationState />
        </footer>
      </aside>
      <Map center={[-22.9288824, -46.6328147]} zoom={15} style={{ width: "100%", height: "100%" }}>
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token${process.env.REACT_APP_MAPBOX_TOKEN}`} />*/}
      </Map>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
