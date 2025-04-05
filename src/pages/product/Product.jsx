import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
export default function Product() {
  return (
    <div className="product">
      <div className="product-Title_container">
        <h1 className="product-Title">Product</h1>
        <Link>
          <button className="product-Title_add-btn">Create</button>
        </Link>
      </div>
    </div>
  );
}
