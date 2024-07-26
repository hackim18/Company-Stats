import React from "react";
import { Company } from "../types/companie";

interface DataTableProps {
  data: Company[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Revenue</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Expenses</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Profit</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number of Transactions</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Share</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Count</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((company) => (
            <tr key={company.companyName}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{company.companyName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${company.revenues.reduce((acc, rev) => acc + rev.revenue, 0).toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${company.revenues.reduce((acc, rev) => acc + rev.expenses, 0).toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${company.revenues.reduce((acc, rev) => acc + rev.profit, 0).toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {company.revenues.reduce((acc, rev) => acc + rev.numberOfTransactions, 0)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {(
                  (company.revenues.reduce((acc, rev) => acc + rev.revenue, 0) /
                    data.reduce((acc, company) => acc + company.revenues.reduce((acc, rev) => acc + rev.revenue, 0), 0)) *
                  100
                ).toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {company.revenues.reduce((acc, rev) => acc + rev.employeeCount, 0)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
