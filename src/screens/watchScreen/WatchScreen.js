import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import "./_watchScreen.scss";
import Comments from "../../components/comments/Comments";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import { getVideoById } from "../../redux/actions/videos.action";

const WatchScreen = () => {
  const { id } = useParams();
  // tgbNymZ7vqY

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.selectedVideo);

  return (
    <Row>
      {/* Video Player */}
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen
            height="100%"
            width="100%"
          ></iframe>
        </div>

        {!loading ? (
          /* Video Meta Data - Video Details */
          <VideoMetaData video={video} videoId={id} />
        ) : (
          <h6>Loading Video</h6>
        )}

        {/* Comments Section */}
        <Comments videoId={id} totalComments = {video?.statistics?.commentCount}/>
      </Col>

      {/* Sidebar Video Suggestions */}
      <Col lg={4}>
        {[...new Array(10)].map((value, i) => (
          <VideoHorizontal key={i} />
        ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
