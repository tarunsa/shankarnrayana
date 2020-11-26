import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import "../Styles/HomeScreen.css";
import Navbar from "./Nav/Navbar";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
function HomeScreen() {
  return (
    <div>
      <div>
        <Navbar className="navs" />
      </div>
      <div>
        <Carousel breakPointss={breakPoints} className="carosel">
          <Card number="1" />
          <Card number="2" />
          <Card number="3" />
          <Card number="4" />
          <Card />
          <Card />
          <Card />
        </Carousel>
      </div>
    </div>
  );
}
export default HomeScreen;
