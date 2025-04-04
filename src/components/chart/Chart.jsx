import React, { useEffect, useState } from "react";
import "./Chart.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  XAxis,
  CartesianGrid,
} from "recharts";
{
  /*datakey = xAxisData , grid = cartesian */
}
export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="step" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
