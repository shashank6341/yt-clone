import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Video from "../../components/Video/Video";

import { getPopularVideos } from "../../redux/actions/videos.action";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos } = useSelector((state) => state.homeVideos);

  const fetchData = () => {
    dispatch(getPopularVideos())
  };

  return (
    <Container>
      <CategoriesBar />
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        Loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      >
        {videos.map((video, i) => (
          <Col lg={3} md={4} key={video.id}>
            <Video video={video} />
          </Col>
        ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
