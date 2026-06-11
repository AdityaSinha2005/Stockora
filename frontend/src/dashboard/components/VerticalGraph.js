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
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      position: "top",
      labels: {
        boxWidth: 12,
        font: {
          size: 12,
        },
      },
    },

    title: {
      display: true,
      text: "Holdings",
      font: {
        size: 18,
      },
    },
  },

  scales: {
    x: {
      ticks: {
        font: {
          size: 10,
        },
      },
    },

    y: {
      ticks: {
        font: {
          size: 10,
        },
      },
    },
  },
};

export function VerticalGraph({ data }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "350px",
      }}
    >
      <Bar options={options} data={data} />
    </div>
  );
}