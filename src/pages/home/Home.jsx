import React from "react";
import Features from "../../components/features/Features";
import Chart from "../../components/chart/Chart";
import { useState, useEffect } from "react";
// import { xAxisData } from "../../datas";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

import "./Home.css";
export default function Home() {
  const [fetchChart, setFetchChart] = useState([]);
  const [info, setInfo] = useState({});
  useEffect(() => {
    async function fetchChartInfos() {
      await fetch(
        "https://cms-panel-54050-default-rtdb.firebaseio.com/xAxisData.json"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(Object.entries(data));
          setFetchChart(Object.entries(data));
        });
    }
    fetchChartInfos();
  }, []);
  return (
    <div className="home">
      <Features />
      <Chart
        grid
        title="Monthly Sale"
        data={fetchChart.map((item) => item[1])}
        dataKey="sale"
      />
      <div className="home_widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
