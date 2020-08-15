import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css";

const VideoCard = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) => {
  return (
    <div className="videoCard">
      <img className="videCard_videoImg" src={image} alt="" />
      <div className="videoCard_videoInfo">
        <Avatar className="videoCard_avatar" alt={channel} src={channelImage} />
        <div className="videoCard_text">
          <h4>{title}</h4>
          <p className="videoCard_smallText">{channel}</p>
          <p className="videoCard_smallText">
            {views} &bull; {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
