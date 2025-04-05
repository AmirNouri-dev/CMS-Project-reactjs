import React, { useState } from "react";
import { userRows } from "./../../datas";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./UsersList.css";
import DeleteIcon from "@mui/icons-material/Delete";

export default function UsersList() {
  const [userDatas, setUserDatas] = useState(userRows);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 4,
    page: 0,
  });
  function removeUser(userID) {
    setUserDatas(
      userDatas.filter((user) => {
        return user.id != userID;
      })
    );
  }

  const columns = [
    { field: "id", headerName: "id", width: 90 },

    {
      field: "user",
      headerName: "user",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/user/${params.row.id}`} className="link">
            <div className="userList-User">
              <img
                src={params.row.avatar}
                alt="avatar"
                className="userList-User_img"
              />
              {params.row.userName}
            </div>
          </Link>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "transAction", headerName: "Transaction", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userList-User_action">
            <Link to={`/user/${params.row.id}`}>
              <button className="userList-User-edit-btn">Edit</button>
            </Link>
            <DeleteIcon
              className="userList-User-delete-btn"
              onClick={() => removeUser(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        className="userList-dataGrid"
        rows={userDatas}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[2, 4, 5, 10]}
      />
    </div>
  );
}
