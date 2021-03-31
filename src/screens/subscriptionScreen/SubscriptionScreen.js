import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import { getSubscribedChannels } from "../../redux/actions/videos.action";

import "./_subscriptionScreen.scss";

export const SubscriptionScreen = () => {
  const dispatch = useDispatch();
  const { videos, loading } = useSelector(
    (state) => state.subscriptionsChannel
  );

  useEffect(() => {
    dispatch(getSubscribedChannels());
  }, [dispatch]);

  return (
    <Container fluid>
      {!loading ? (
        videos?.map((video) => <VideoHorizontal video={video} key={video.id} subscriptionScreen/>)
      ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="160px" count={15} />
        </SkeletonTheme>
      )}
    </Container>
  );
};
