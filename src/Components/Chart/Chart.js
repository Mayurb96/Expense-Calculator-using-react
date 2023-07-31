import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value);  //to convert array to numbers
    const maximum=Math.max(...dataPointValues);                     //as Math.max() takes only numbers as input 
 
    return( <div className="chart">{props.dataPoints.map((dataPoint) => (
    <ChartBar
      key={dataPoint.label}
      value={dataPoint.value}
      maxValue={maximum}
      label={dataPoint.label}
    />
  ))}
  </div>
  );
};

export default Chart;
