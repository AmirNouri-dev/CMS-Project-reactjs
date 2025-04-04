import React from "react";
import Features from "../../components/features/Features";
import Chart from "../../components/chart/Chart";
import xAxisData from "./../../datas";
import WidgetSm from "../../components/widgetSm/WidgetSm";

import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <Features />
      <Chart grid title="Monthly Sale" data={xAxisData} dataKey="sale" />
      <div className="home_widgets">
        <WidgetSm />
      </div>
    </div>
  );
}
