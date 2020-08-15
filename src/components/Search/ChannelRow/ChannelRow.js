import React from "react";
import { Avatar } from "@material-ui/core";
import "./ChannelRow.css";

const ChannelRow = ({ image, channel, subs, numberOfVideos, description }) => {
  return (
    <div className="channelRow">
      <Avatar alt={channel} src={image} className="channelRow_logo" />
      <div className="channelRow_text">
        <h4>{channel}</h4>
        <p>
          {subs} subscribers &bull; {numberOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
