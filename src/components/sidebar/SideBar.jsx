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
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
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
              <TrendingUp className="sideBarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-wrapper-menu">
          <h3 className="sidebar-wrapper-menu-title">Quick Start</h3>
          <ul className="sidebar-wrapper-menu_list">
            <li className="sidebar-wrapper-menu_list_item active">
              <PermIdentity className="sideBarIcon" />
              Users
            </li>
            <li className="sidebar-wrapper-menu_list_item">
              <PersonAddOutlinedIcon className="sideBarIcon" />
              New User
            </li>
            <li className="sidebar-wrapper-menu_list_item">
              <Storefront className="sideBarIcon" />
              Products
            </li>
            <li className="sidebar-wrapper-menu_list_item">
              <WorkOutline className="sideBarIcon" />
              Transactions
            </li>
            <li className="sidebar-wrapper-menu_list_item">
              <Report className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
