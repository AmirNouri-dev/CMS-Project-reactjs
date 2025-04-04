import "./SideBar.css";
import React from "react";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-wrapper-menu">
          <h3 className="sidebar-wrapper-menu-title">Dashboard</h3>
          <ul className="sidebar-wrapper-menu_list">
            <li className="sidebar-wrapper-menu_list_item active">
              <LineStyle className="sideBarIcon" />
              Home
            </li>
            <li className="sidebar-wrapper-menu_list_item">
              <Timeline className="sideBarIcon" />
              Analytics
            </li>
            <li className="sidebar-wrapper-menu_list_item">
              <Timeline className="TrendingUp" />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
