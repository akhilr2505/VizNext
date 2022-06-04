import NavbarComponent from "../components/NavbarComponent";
import { BarComponent } from "../components/BarComponent";
import { PieChartComponents } from "../components/PieChartComponents";
import { HorizontalBarComponent } from "../components/HorizontalBarComponent";
import React from "react";
import "./DonorPage.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import faker from "faker";

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

// const labels = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "Dataset 2",
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//   ],
// };

export default function App() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const labels_alt = [
    "Preschooling",
    "Primary eduction",
    "Secondary education",
    "Senior Secondary education",
    "Higher education",
    "Graduation",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const programs = [
    "VACCINATION DRIVE",
    "STREET LIGHTS INSTALLED",
    "STUDENTS HAVING ACCESS TO EDUCATION",
    "# OF LAKES REVIVED",
  ];

  const programData = [
    [
      45045, 56450, 65004, 65789, 76001, 77891, 89001, 92000, 92300, 94000,
      95032, 96034,
    ],
    [235, 435, 356, 456, 567, 657, 567, 357, 645, 598, 700, 679],
    [45678, 34567, 30000, 28000, 22203, 15000],
    [4, 5, 6, 7, 5, 6, 5, 5, 6, 7, 8, 7],
  ];

  const dataPlot = [
    {
      labels,
      datasets: [
        {
          label: programs[0],
          data: programData[0],
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    },
    {
      labels,
      datasets: [
        {
          label: programs[1],
          data: programData[1],
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    },
    {
      labels,
      datasets: [
        {
          label: programs[2],
          data: programData[2],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    {
      labels,
      datasets: [
        {
          label: programs[3],
          data: programData[3],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    },
  ];
  return (
    <div>
      <NavbarComponent />
      <BarComponent data={dataPlot[0]} heading={programs[0]} />
      <br />
      <BarComponent data={dataPlot[1]} heading={programs[1]} />
      <br />
      <PieChartComponents data={dataPlot[2]} />
      <br />
      <HorizontalBarComponent data={dataPlot[3]} heading={programs[3]} />
    </div>
  );
}
