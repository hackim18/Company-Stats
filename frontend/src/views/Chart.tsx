import React, { useState, useEffect } from "react";
import Chart from "../components/Chart";
import { getAllCompanies } from "../action/action";
import { Company } from "../types/companie";

const ChartPage: React.FC = () => {
  const [selectedChart, setSelectedChart] = useState<string>("bar");
  const [data, setData] = useState<Company[]>([]);

  const handleChartChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedChart(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCompanies();
      setData(data);
      console.log("🚀 ~ useEffect ~ data:", data);
    };

    fetchData();
  }, []);

  return (
    <div className="App min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="container max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Company Data Chart</h1>
          <div className="mt-4">
            <label htmlFor="chart-select" className="block text-lg font-medium text-gray-700">
              Select Chart Type
            </label>
            <select
              id="chart-select"
              value={selectedChart}
              onChange={handleChartChange}
              className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="bar">Bar Chart</option>
              <option value="line">Line Chart</option>
              <option value="pie">Pie Chart</option>
              <option value="doughnut">Doughnut Chart</option>
            </select>
          </div>
        </header>
        <div className="chart-container">
          <Chart data={data} type={selectedChart as "bar" | "line" | "pie" | "doughnut"} />
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
