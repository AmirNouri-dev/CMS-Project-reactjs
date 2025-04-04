import React from "react";
import "./WidgetSm.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { newJoinUsers } from "../../datas";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSm_title">New Join Member</span>
      <ul className="widgetSm_List">
        {newJoinUsers.map((user) => (
          <li key={user.id} className="widgetSm_list-item">
            <img
              src={user.img}
              alt="avatar"
              className="widgetSm_list-item_image"
            />
            <div className="widgetSm_list-item_user">
              <span className="widgetSm_list-item_user-name">{user.name}</span>
              <span className="widgetSm_list-item_user-title">
                {user.title}
              </span>
            </div>
            <button className="widgetSm_list-item-btn">
              <VisibilityOutlinedIcon className="widgetSm_list-item-btn_icon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
