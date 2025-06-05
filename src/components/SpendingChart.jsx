import React, { useContext } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { TransactionContext } from '../context/TransactionContext';

const COLORS = ['#10B981', '#EF4444'];

function SpendingChart() {
  const { transactions } = useContext(TransactionContext);

  const data = [
    { name: 'Income', value: transactions.filter(t => t.amount > 0).reduce((a, b) => a + b.amount, 0) },
    { name: 'Expense', value: Math.abs(transactions.filter(t => t.amount < 0).reduce((a, b) => a + b.amount, 0)) }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl h-72">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Spending Breakdown</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={40}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendingChart;