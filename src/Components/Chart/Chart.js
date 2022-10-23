import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const dataPointValueArr = props.dataPoint.map((data) => data.value);
  const totalMaximum = Math.max(...dataPointValueArr);

  return (
    <div className="chart">
      {props.dataPoint.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={totalMaximum}
          label={data.label}
        />
      ))}
    </div>
  );
}

export default Chart;
