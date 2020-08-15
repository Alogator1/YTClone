import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

const Header = ({ changeHidden, isHidden }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="header">
      <div className="header_left">
        <IconButton
          size="small"
          onClick={() => {
            changeHidden(!isHidden);
            console.log(isHidden);
          }}
        >
          <MenuIcon />
        </IconButton>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1200px-YouTube_Logo.svg.png"
            alt="logo"
            className="header_logo"
          ></img>
        </Link>
      </div>
      <form className="header_mid">
        <input
          value={search}
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="header_searchField"
        />
        <Link to={`/search/${search}`} className="header_searchLink">
            <SearchIcon className="header_searchIcon" />
        </Link>
      </form>
      <div className="header_right">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <Avatar
          alt="galkin"
          src="https://vokrug-tv.ru/pic/person/6/b/8/d/6b8d337f45dc849f57c65df56010ea40.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
