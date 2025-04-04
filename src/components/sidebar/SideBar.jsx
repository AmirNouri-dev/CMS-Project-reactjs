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
  PersonAddAlt1Outlined,
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
              <PersonAddAlt1Outlined className="sideBarIcon" />
              New User
            </li>
            <li className="sidebar-wrapper-menu_list_item">
              <Storefront className="sideBarIcon" />
              Products
            </li>
            <li className="sidebar-wrapper-menu_list_item">
              <AttachMoney className="sideBarIcon" />
              Transactions
            </li>
            <li className="sidebar-wrapper-menu_list_item">
              <BarChart className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar-wrapper-menu">
          <h3 className="sidebar-wrapper-menu-title">Notifications</h3>
          <ul className="sidebar-wrapper-menu_list">
            <li className="sidebar-wrapper-menu_list_item active">
              <MailOutline className="sideBarIcon" />
              Mail
            </li>
            <li className="sidebar-wrapper-menu_list_item">
              <DynamicFeed className="sideBarIcon" />
              Feedback
            </li>
            <li className="sidebar-wrapper-menu_list_item">
              <ChatBubbleOutline className="sideBarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebar-wrapper-menu">
          <h3 className="sidebar-wrapper-menu-title">Staff</h3>
          <ul className="sidebar-wrapper-menu_list">
            <li className="sidebar-wrapper-menu_list_item active">
              <WorkOutline className="sideBarIcon" />
              Manage
            </li>
            <li className="sidebar-wrapper-menu_list_item">
              <Timeline className="sideBarIcon" />
              Analytics
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
