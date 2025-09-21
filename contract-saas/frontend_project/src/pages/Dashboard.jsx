import React from 'react';

function Dashboard() {
  const contracts = [
    { id: 1, name: "Contract A", parties: "Alice & Bob", expiry: "2025-12-31", status: "Active", risk: "Low" },
    { id: 2, name: "Contract B", parties: "Charlie & Delta", expiry: "2024-06-30", status: "Expired", risk: "High" }
  ];

  return (
    <div>
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-2 py-1 border">Name</th>
            <th className="px-2 py-1 border">Parties</th>
            <th className="px-2 py-1 border">Expiry</th>
            <th className="px-2 py-1 border">Status</th>
            <th className="px-2 py-1 border">Risk</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map(c => (
            <tr key={c.id}>
              <td className="px-2 py-1 border">{c.name}</td>
              <td className="px-2 py-1 border">{c.parties}</td>
              <td className="px-2 py-1 border">{c.expiry}</td>
              <td className="px-2 py-1 border">{c.status}</td>
              <td className="px-2 py-1 border">{c.risk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;