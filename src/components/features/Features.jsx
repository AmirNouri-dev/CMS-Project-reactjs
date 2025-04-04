import React from "react";
import "./Features.css";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
export default function Features() {
  return (
    <div className="features">
      <div className="featureItem">
        <div className="featureItem-title">Revanue</div>
        <div className="featureItem-container">
          <span className="featureItem-container_money">$2,410</span>
          <span className="featureItem-container_rate">
            -11.4
            <ArrowDownwardOutlinedIcon className="featureItem-container_rate_icon negative" />
          </span>
        </div>
        <span className="featureItem-desc">Compared to last month</span>
      </div>
      <div className="featureItem">
        <div className="featureItem-title">Sales</div>
        <div className="featureItem-container">
          <span className="featureItem-container_money">$2,410</span>
          <span className="featureItem-container_rate">
            -1.4
            <ArrowDownwardOutlinedIcon className="featureItem-container_rate_icon negative" />
          </span>
        </div>
        <span className="featureItem-desc">Compared to last month</span>
      </div>
      <div className="featureItem">
        <div className="featureItem-title">Cost</div>
        <div className="featureItem-container">
          <span className="featureItem-container_money">$2,410</span>
          <span className="featureItem-container_rate">
            +1.4
            <ArrowUpwardOutlinedIcon className="featureItem-container_rate_icon " />
          </span>
        </div>
        <span className="featureItem-desc">Compared to last month</span>
      </div>
    </div>
  );
}
