import React from "react";
import ReactPlayer from "react-player";
import "../../Styles/HomeScreen.css";
const VideoPlayer = () => {
  return (
    <div className="container">
      <div className="video">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://fb.watch/24DZSivUYg/"
            controls={true}
          />
        </div>
      </div>
    </div>
  );
};
export default VideoPlayer;
