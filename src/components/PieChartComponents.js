import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChartComponents = ({ data }) => {
  return (
    <div
      style={{
        height: "60vh",
        width: "70 vw",
        position: "relative",
        marginBottom: "5%",
        padding: "1%",
      }}
    >
      <Pie data={data} options={{ maintainAspectRatio: false }} />
    </div>
  );
};
