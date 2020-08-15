import React from "react";
import "./SearchVideoList.css";

const SearchVideoList = ({
  views,
  description,
  timespamp,
  channel,
  title,
  image,
}) => {
  return (
    <div className="searchVideoList">
      <img src={image} alt={channel} />
      <div className="searchVideoList_text">
        <h3>{title}</h3>
        <p className="searchVideoList_head">
          {channel} &bull; {views} views &bull; {timespamp}
        </p>
        <p className="searchVideoList_description">{description}</p>
      </div>
    </div>
  );
};

export default SearchVideoList;
