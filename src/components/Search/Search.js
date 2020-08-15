import React from "react";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow/ChannelRow";
import SearchVideoList from "./SearchVideoList/SearchVideoList";
import "./Search.css";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <h2>{"Searching for " + window.location.href.split("/").pop()} </h2>
      <div className="searchPage_filter">
        <TuneIcon />
        <p>FILTER</p>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJwm5Q4qjSHANRfkBS-89vJUeniE7XgRQ5gFyqUaqQ=s900-c-k-c0xffffffff-no-rj-mo"
        channel="Максим Кац"
        subs="421k"
        numberOfVideos="689"
        description="На этом канале видео про политику, урбанистику, государственное управление. Стараюсь их делать спокойными и обоснованными научными данными."
      />
      <hr />
      <div className="searchPage_searchVideos">
        <SearchVideoList
          views="91k"
          description="Третий день с момента, как в Беларуси Александр Лукашенко проиграл президентские выборы."
          timespamp="1 час назад"
          channel="Максим Кац"
          title="Протесты продолжаются. Жыве Беларусь!"
          image="https://i.ytimg.com/vi/8UB1i91Z2fo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDk6Mj--ih3-1Rx1tW6lq4b8CGeWg"
        />
        <SearchVideoList
          views="91k"
          description="Третий день с момента, как в Беларуси Александр Лукашенко проиграл президентские выборы."
          timespamp="1 час назад"
          channel="Максим Кац"
          title="Протесты продолжаются. Жыве Беларусь!"
          image="https://i.ytimg.com/vi/8UB1i91Z2fo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDk6Mj--ih3-1Rx1tW6lq4b8CGeWg"
        />
        <SearchVideoList
          views="91k"
          description="Третий день с момента, как в Беларуси Александр Лукашенко проиграл президентские выборы."
          timespamp="1 час назад"
          channel="Максим Кац"
          title="Протесты продолжаются. Жыве Беларусь!"
          image="https://i.ytimg.com/vi/8UB1i91Z2fo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDk6Mj--ih3-1Rx1tW6lq4b8CGeWg"
        />
      </div>
    </div>
  );
};

export default SearchPage;
