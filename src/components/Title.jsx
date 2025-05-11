import React from "react";
import "../styles/title.css";
// Import the image properly
import profileImage from "../assets/portfolio2.png";
import Nav from "./Nav";

function Title(props) {
  return (
    <div className="section-box">
      <div className="content-side">
        <div>
          <p className="clr-light">Hi, my name is</p>
          <h1 className="head">{props.name}</h1>
          <p className="blur extend">I build things for the web.</p>
          <p className="blur">
            I'm a {props.age} year old developer living in India, who got into
            coding trying to make a simple discord bot. Eventually, my interest
            grew and started exploring different parts of the CS world.{" "}
          </p>
        </div>
        <Nav />
      </div>

      <div className="image-side">
        <div className="imgBg"></div>
        <img src={profileImage} alt="Mukul Singh" className="profile-image" />
      </div>
    </div>
  );
}

export default Title;
