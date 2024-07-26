import React from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";
import "../chartSetup";
import { Company } from "../types/companie";

interface ChartProps {
  data: Company[];
  type: "bar" | "line" | "pie" | "doughnut";
}

const Chart: React.FC<ChartProps> = ({ data, type }) => {
  const chartData = {
    labels: data.map((company) => company.companyName),
    datasets: [
      {
        label: "Revenue",
        data: data.map((company) => company.revenues.reduce((acc, rev) => acc + rev.revenue, 0)),
        backgroundColor:
          type === "pie" || type === "doughnut"
            ? [
                "rgba(75, 192, 192, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ]
            : ["rgba(75, 192, 192, 0.2)"],
        borderColor:
          type === "pie" || type === "doughnut"
            ? [
                "rgba(75, 192, 192, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(54, 162, 235, 1)",
              ]
            : ["rgba(75, 192, 192, 1)"],
        borderWidth: type === "pie" || type === "doughnut" ? 1 : 2,
        fill: type !== "pie" && type !== "doughnut",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.dataset.label}: ${context.raw} USD`;
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{`${type.charAt(0).toUpperCase() + type.slice(1)} Chart`}</h2>
      <div className="chart-wrapper" style={{ position: "relative", height: "400px", width: "100%" }}>
        {type === "bar" && <Bar data={chartData} options={options} />}
        {type === "line" && <Line data={chartData} options={options} />}
        {type === "pie" && <Pie data={chartData} options={options} />}
        {type === "doughnut" && <Doughnut data={chartData} options={options} />}
      </div>
    </div>
  );
};

export default Chart;
