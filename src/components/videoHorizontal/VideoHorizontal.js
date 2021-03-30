// Video Suggestions Sidebar

import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";

import request from "../../api";
import "./_videoHorizontal.scss";
import { useHistory } from "react-router";

const VideoHorizontal = ({ video, searchScreen, subscriptionScreen }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
      resourceId,
    },
  } = video;

  const isVideo = !id.kind === "youtube#channel" || subscriptionScreen;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  // Get Video Details
  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    if (isVideo) {
      get_video_details();
    }
  }, [id, isVideo]);

  // Get Channel Icon
  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  // Moment Formatter
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const history = useHistory();

  const _channelId = resourceId?.channelId || channelId;

  const handleClick = () => {
    isVideo
      ? history.push(`/watch/${id.videoId}`)
      : history.push(`/channel/${_channelId}`);
  };

  const thumbnailcss = !isVideo ? "videoHorizontal__thumbmnail-channel" : "";

  return (
    <Row
      className="videoHorizontal m-1 py-2 align-items-center"
      onClick={handleClick}
    >
      <Col
        xs={searchScreen || subscriptionScreen ? 6 : 4}
        md={searchScreen || subscriptionScreen ? 4 : 6}
        className="videoHorizontal__left"
      >
        <LazyLoadImage
          src={medium.url}
          effect="blur"
          className={`videoHorizontal__thumbmnail ${thumbnailcss}`}
          wrapperClassName="videoHorizontal__thumbmnail-wrapper"
        />
        {isVideo && (
          <span className="videoHorizontal__duration">{_duration}</span>
        )}
      </Col>
      <Col
        xs={searchScreen || subscriptionScreen ? 4 : 6}
        md={searchScreen || subscriptionScreen ? 8 : 6}
        className="videoHorizontal__right p-0"
      >
        <p className="videoHorizontal__title mb-1">{title}</p>

        {isVideo && (
          <div className="videoHorizontal__details">
            {numeral(views).format("0.a")} Views •
            <span className="ml-1">{moment(publishedAt).fromNow()}</span>
          </div>
        )}

        {/* {isVideo && searchScreen && <p className="mt-1">{description}</p>} */}
        {(searchScreen || subscriptionScreen) && (
          <p className="mt-1 videoHorizontal__desc">{description}</p>
        )}

        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {isVideo && <LazyLoadImage src={channelIcon?.url} effect="blur" />}

          <p className={"mb-0"}>{channelTitle}</p>
        </div>

        {subscriptionScreen && (
          <p className={"mt-2"}>
            {video.contentDetails.totalItemCount} Videos
          </p>
        )}
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
