import React from "react";
import "./Product.css";
import { Link, useParams } from "react-router-dom";
import { productsSalesChartData } from "./../../datas";
import Chart from "./../../components/chart/Chart";
import { products } from "./../../datas";

export default function Product() {
  const URLParams = useParams();
  const selectedProduct = products.find(
    (item) => item.id == URLParams.productID
  );
  console.log(selectedProduct);
  return (
    <div className="product">
      <div className="product-Title_container">
        <h1 className="product-Title">Product</h1>
        <Link>
          <button className="product-Title_add-btn">Create</button>
        </Link>
      </div>

      <div className="product-top">
        <div className="product-top_left">
          <Chart
            title="Sales In Month"
            data={productsSalesChartData}
            dataKey="sales"
          />
        </div>
        <div className="product-top_right">
          <div className="product-Info_top">
            <img
              src={selectedProduct.avatar}
              alt=""
              className="product-Info_top-img"
            />
            <span className="product-Info_top-title">
              {selectedProduct.title}
            </span>
          </div>
          <div className="product-Info_bottom">
            <div className="product-Info_item">
              <div className="product-Info_item-key">ID:</div>
              <div className="product-Info_item-value">
                {selectedProduct.id}
              </div>
            </div>
            <div className="product-Info_item">
              <div className="product-Info_item-key">Name:</div>
              <div className="product-Info_item-value">
                {selectedProduct.title}
              </div>
            </div>
            <div className="product-Info_item">
              <div className="product-Info_item-key">Sales:</div>
              <div className="product-Info_item-value">$9000</div>
            </div>
            <div className="product-Info_item">
              <div className="product-Info_item-key">Active:</div>
              <div className="product-Info_item-value">Yes</div>
            </div>
            <div className="product-Info_item">
              <div className="product-Info_item-key">In Stock:</div>
              <div className="product-Info_item-value">
                {selectedProduct.inStock}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
