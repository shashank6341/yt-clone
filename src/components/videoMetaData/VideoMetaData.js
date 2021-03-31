import React, { useEffect } from "react";
import moment from "moment";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";

import "./_videoMetaData.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  checkSubscriptionStatus,
  getChannelDetails,
} from "../../redux/actions/channel.action";
import CustomHelmet from "../customHemlet/CustomHelmet";

const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;

  const dispatch = useDispatch();

  const {
    snippet: channelSnippet,
    statistics: channelStatistics,
  } = useSelector((state) => state.channelDetails.channel);

  const subscriptionStatus = useSelector(state => state.channelDetails.subscriptionStatus)

  useEffect(() => {
    dispatch(getChannelDetails(channelId));
    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch, channelId]);

  return (
    <div className="videoMetaData py-2">
      <CustomHelmet title={title} description={description}/>
      {/* Top Division - Title / Likes / Dislikes */}
      <div className="videoMetaData__top">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(viewCount).format("0.a")} Views •
            <span className="ml-1">{moment(publishedAt).fromNow()}</span>
          </span>
          <div>
            <span className="mr-3">
              <MdThumbUp className="mr-1" size={26} />
              {numeral(likeCount).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown className="mr-1" size={26} />
              {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>

      {/* Channel Icon / Subscriber  */}
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-1 py-3">
        <div className="d-flex">
          <img
            src={channelSnippet?.thumbnails?.default?.url}
            alt="avatar"
            className="rounded-circle mr-3"
          />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>
              {numeral(channelStatistics?.subscriberCount).format("0.a")}{" "}
              Subscribers
            </span>
          </div>
        </div>
        <button className={`btn border-0 p-2 m-2 ${subscriptionStatus ? 'grey-btn' : ''}`}>{ subscriptionStatus ? 'Subscribed' : 'Subscribe'}</button>
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
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
