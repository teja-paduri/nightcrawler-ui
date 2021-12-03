import React from "react";
import NightCrawler from "./Images/NightCrawler.jpg";
import "./About.css";

export default class AboutImage extends React.Component {
  render() {
    return (
      <div className="About">
        <div className="title"> Welcome! </div>
        <img className="NightCrawler" src={NightCrawler} alt="NightCrawler" />
      </div>
    );
  }
}
