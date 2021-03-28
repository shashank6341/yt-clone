import React from "react";
import "./_video.scss";

import { AiFillEye } from "react-icons/ai";

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/RY63Nw0w33w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBimbmrYs8flxBFF5658A6lP4Om6w"
          alt="Thumbnail"
        />
        <span>09:02</span>
      </div>
      <div className="video__tile">OnePlus 9 Review: Sneaky Value!</div>
      <div className="video__details">
        <span>
          <AiFillEye /> 3M Views •
        </span>
        <span> 10 Days Ago</span>
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s68-c-k-c0x00ffffff-no-rj"
          alt="SVBHD"
        />
        <p>Shashank Verma</p>
      </div>
    </div>
  );
};

export default Video;
