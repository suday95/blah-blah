import React from 'react';

function Filters() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Filters</h3>
      <div className="flex gap-2">
        <input type="text" placeholder="Search by text..." className="w-full p-2 border rounded" />
        <select className="p-2 border rounded">
          <option value="">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;