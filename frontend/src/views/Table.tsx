import React, { useState, useEffect } from "react";
import { getAllCompanies } from "../action/action";
import { Company } from "../types/companie";
import DataTable from "../components/DataTable";

const TablePage: React.FC = () => {
  const [data, setData] = useState<Company[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCompanies();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="container max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Company Data</h1>
        </header>
        <DataTable data={data} />
      </div>
    </div>
  );
};

export default TablePage;
