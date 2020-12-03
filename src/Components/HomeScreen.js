import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import Footer from "./Nav/Footer";
import Sliders from "./Screens/Sliders";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import VideoPlayer from "./Screens/VideoPlayer";
import "../Styles/HomeScreen.css";
import Navbar from "./Nav/Navbar";

export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <Sliders />
        {/* <VideoPlayer /> */}

        {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <iframe src="https://www.facebook.com/Malagundla-Sankaranarayana-Minister-for-Roads-Buildings-104245877607832"></iframe>
          </div>
        </div> */}
        <Footer />
      </div>
    );
  }
}
