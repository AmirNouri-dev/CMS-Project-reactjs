import "./SideBar.css";
import React from "react";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonAddAlt1Outlined,
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

import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-wrapper-menu">
          <h3 className="sidebar-wrapper-menu-title">Dashboard</h3>
          <ul className="sidebar-wrapper-menu_list">
            <Link to="/" className="link">
              <li className="sidebar-wrapper-menu_list_item active">
                <LineStyle className="sideBarIcon" />
                Home
              </li>
            </Link>
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
            <Link to="/users" className="link">
              <li className="sidebar-wrapper-menu_list_item active">
                <PermIdentity className="sideBarIcon" />
                Users
              </li>
            </Link>
            <Link to="/newUser" className="link">
              <li className="sidebar-wrapper-menu_list_item">
                <PersonAddAlt1Outlined className="sideBarIcon" />
                New User
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebar-wrapper-menu_list_item">
                <Storefront className="sideBarIcon" />
                Products
              </li>
            </Link>

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
