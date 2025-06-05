import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

function Balance() {
  const { transactions } = useContext(TransactionContext);
  const balance = transactions.reduce((acc, txn) => acc + txn.amount, 0);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">Your Balance</h2>
      <p className="text-2xl text-green-500">₹ {balance.toFixed(2)}</p>
    </div>
  );
}

export default Balance;
