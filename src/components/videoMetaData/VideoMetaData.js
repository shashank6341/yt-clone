import React from "react";
import moment from "moment";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";

import "./_videoMetaData.scss";

const VideoMetaData = () => {
  return (
    <div className="videoMetaData py-2">
      {/* Top Division - Title / Likes / Dislikes */}
      <div className="videoMetaData__top">
        <h5>Video Title</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(1000000).format("0.a")} Views •
            <span className="ml-1">{moment("2021-03-21").fromNow()}</span>
          </span>
          <div>
            <span className="mr-3">
              <MdThumbUp className="mr-1" size={26} />
              {numeral(246).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown className="mr-1" size={26} />
              {numeral(12).format("0.a")}
            </span>
          </div>
        </div>
      </div>

      {/* Channel Icon / Subscriber  */}
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-1 py-3">
        <div className="d-flex">
          <img
            src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png"
            alt="avatar"
            className="rounder-circle mr-3"
          />
          <div className="d-flex flex-column">
            <span>Shashank Verma</span>
            <span>{numeral(890000).format("0.a")} Subscribers</span>
          </div>
        </div>
        <button className="btn border-0 p-2 m-2">Subscribe</button>
      </div>
      {/* Channel Description */}
      <div className="videoMetaData__description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At earum
          alias itaque facere quo? Voluptatem id a quae rerum ratione ducimus
          cum, ab numquam repudiandae nesciunt modi laudantium ullam odit
          similique ipsum culpa ut nobis necessitatibus voluptas recusandae
          accusantium ea at, esse reprehenderit? Magni consequatur asperiores
          laudantium rerum in sequi!
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
