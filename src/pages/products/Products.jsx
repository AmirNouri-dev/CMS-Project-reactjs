import React, { useState } from "react";
import { products } from "./../../datas";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./Products.css";
import DeleteIcon from "@mui/icons-material/Delete";

export default function UsersList() {
  const [productDatas, setProductDatas] = useState(products);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  function removeProduct(productID) {
    setProductDatas(
      productDatas.filter((product) => {
        return product.id != productID;
      })
    );
  }

  const columns = [
    { field: "id", headerName: "id", width: 120 },

    {
      field: "item",
      headerName: "item",
      width: 300,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className="link">
            <div className="productsList-product">
              <img
                src={params.row.avatar}
                alt="avatar"
                className="productsList-product_img"
              />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    { field: "price", headerName: "Price", width: 160 },
    { field: "inStock", headerName: "In Stock", width: 180 },

    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="productsList-product_action">
            <Link to={`/product/${params.row.id}`}>
              <button className="productsList-product-edit-btn">Edit</button>
            </Link>
            <DeleteIcon
              className="productsList-product-delete-btn"
              onClick={() => removeProduct(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="productsList">
      <DataGrid
        className="productsList-dataGrid"
        rows={productDatas}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[2, 4, 5, 10]}
        checkboxSelection
      />
    </div>
  );
}
