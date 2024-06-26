import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/logos/menu.png";
import logo from "../../assets/logos/logo.png";
import search_icon from "../../assets/logos/search.png";
import upload_icon from "../../assets/logos/upload.png";
import more_icon from "../../assets/logos/more.png";
import notification_icon from "../../assets/logos/notification.png";
import profile_icon from "../../assets/logos/jack.png";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="nav">
      <div className="nav-left flex-div">
        <img
          src={menu_icon}
          onClick={() => setSidebar((prev) => !prev)}
          alt="menu icon"
          className="menu-icon"
        />
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="search icon" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="upload icon" />
        <img src={more_icon} alt="more icon" />
        <img src={notification_icon} alt="notification icon" />
        <img src={profile_icon} className="user-icon" alt="profile icon" />
      </div>
    </nav>
  );
};

export default Navbar;
