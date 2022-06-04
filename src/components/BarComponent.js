import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Chart } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "Chart.js Bar Chart",
//     },
//   },
// };

export const BarComponent = ({ data, heading }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: heading,
      },
    },
  };
  return (
    <div
      style={{
        height: "60vh",
        width: "70vw",
        position: "relative",
        margin: "40px auto",
        marginBottom: "5%",
        padding: "1%",
      }}
    >
      <Bar options={options} data={data} />
    </div>
  );
};
