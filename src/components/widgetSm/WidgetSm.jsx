import { React, useEffect, useState } from "react";
import "./WidgetSm.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// import { newJoinUsers } from "../../datas";
import { data } from "react-router";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      await fetch(
        `https://cms-panel-54050-default-rtdb.firebaseio.com/newJoinUsers.json`
      )
        .then((res) => res.json())
        .then((data) => setUsers(Object.entries(data)));
    }
    fetchUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSm_title">New Join Member</span>
      <ul className="widgetSm_List">
        {/* {newJoinUsers.map((user) => ( */}
        {users.map((user) => (
          <li key={user[1].id} className="widgetSm_list-item">
            <img
              src={user[1].img}
              alt="avatar"
              className="widgetSm_list-item_image"
            />
            <div className="widgetSm_list-item_user">
              <span className="widgetSm_list-item_user-name">
                {user[1].name}
              </span>
              <span className="widgetSm_list-item_user-title">
                {user[1].title}
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
