import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Video from "../../components/Video/Video";
import SkeletonVideo from "../../components/skeletons/SkeletonVideo";

import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import CustomHelmet from "../../components/customHemlet/CustomHelmet";


const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  return (
    <Container>
      <CustomHelmet/>
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
        {!loading
          ? videos.map((video, i) => (
              <Col lg={3} md={4} key={video.id}>
                <Video video={video} />
              </Col>
            ))
          : [...Array(20)].map((data, x) => (
              <Col lg={3} md={4} key={x}>
                <SkeletonVideo/>
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
