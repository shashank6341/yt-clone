// Video Suggestions Sidebar

import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";

import request from "../../api";
import "./_videoHorizontal.scss";

const VideoHorizontal = () => {
  // Moment Formatter
  const seconds = moment.duration("934132").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <Row className="videoHorizontal m-1 py-2 align-items-center">
      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage
          src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png"
          effect="blur"
          className="videoHorizontal__thumbmnail"
          wrapperClassName="videoHorizontal__thumbmnail-wrapper"
        />
        <span className="videoHorizontal__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={8} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title mb-1">
          Vlog 34: Day in life of a Youtuber
        </p>
        <div className="videoHorizontal__details">
          {numeral("6102").format("0.a")} Views  • 
          <span className="ml-1">{moment("2020-09-06").fromNow()}</span>
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
        {/* <LazyLoadImage
          src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png"
          effect="blur"
        /> */}
        <p>Shashank Verma</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
