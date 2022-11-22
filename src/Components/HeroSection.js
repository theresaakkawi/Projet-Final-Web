import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="https://res.cloudinary.com/dbcw3h2dv/video/upload/v1669119972/Final_EduBroad/Pexels_Videos_2086113_rq36it.mp4" autoPlay loop muted />
      <h1>Welcome to EduBroad</h1>
      <p>Discover Universities Abroad</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Start Networking!
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          Discover More! <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}
export default HeroSection;