import React from "react";
import "../styles/global.css";
import "../styles/pages/landing.css";

import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import logo from "../images/Logo.svg";
import LocationState from "../components/LocationState";

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logo} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>
        <div className="location">
          <LocationState />
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
