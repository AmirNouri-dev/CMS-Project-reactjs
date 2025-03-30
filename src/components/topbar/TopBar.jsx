import React from "react";
import "./TopBar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
export default function TopBar() {
  return (
    <div>
      <div className="topBar">
        <div className="topBar-Wrapper">
          <div className="topBar-Wrapper_left">
            <span className="logo">AMIR HOSSEIN</span>
          </div>
          <div className="topBar-Wrapper_right">
            <div className="topBar-Wrapper_right-IconContainer">
              <NotificationsIcon />
              <span className="topBar-Wrapper_right-IconContainer_badge">
                2
              </span>
            </div>
            <div className="topBar-Wrapper_right-IconContainer">
              <LanguageIcon />
              <span className="topBar-Wrapper_right-IconContainer_badge">
                2
              </span>
            </div>
            <div className="topBar-Wrapper_right-IconContainer">
              <SettingsIcon />
            </div>
            <img src="./../public/images/leaf.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
