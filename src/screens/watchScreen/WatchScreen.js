import React from "react";
import { Col, Row } from "react-bootstrap";

import Comments from "../../components/comments/Comments";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";

import "./_watchScreen.scss";

const WatchScreen = () => {
  return (
    <Row>

      {/* Video Player */}
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            frameBorder="0"
            title="MY VIDEO"
            allowFullScreen
            height="100%"
            width="100%"
          ></iframe>
        </div>

        {/* Video Meta Data - Video Details */}
        <VideoMetaData/>

        {/* Comments Section */}
        <Comments/>
      </Col>

      {/* Sidebar Video Suggestions */}
      <Col lg={4}>
        {
          [...new Array(10)].map((value, i)=> <VideoHorizontal key={i}/>)
        }
      </Col>
    </Row>
  );
};

export default WatchScreen;
