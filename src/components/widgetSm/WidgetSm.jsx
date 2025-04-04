import React from "react";
import "./WidgetSm.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSm_title">New Join Member</span>
      <ul className="widgetSm_List">
        <li className="widgetSm_list-item">
          <img
            src="./../public/images/avatar.png"
            alt="avatar"
            className="widgetSm_list-item_image"
          />
          <div className="widgetSm_list-item_user">
            <span className="widgetSm_list-item_user-name">
              AmirHossein Nouri
            </span>
            <span className="widgetSm_list-item_user-title">
              FrontEnd Developer
            </span>
          </div>
          <button className="widgetSm_list-item-btn">
            <VisibilityOutlinedIcon className="widgetSm_list-item-btn_icon" />
          </button>
        </li>
      </ul>
    </div>
  );
}
