import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

function TransactionList() {
  const { transactions, deleteTransaction } = useContext(TransactionContext);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Transaction History</h3>
      <ul>
        {transactions.map(txn => (
          <li key={txn.id} className="flex justify-between items-center border-b py-2">
            <span className="text-gray-900 dark:text-white">{txn.text}</span>
            <div>
              <span className={`mr-4 ${txn.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>₹ {txn.amount.toFixed(2)}</span>
              <button onClick={() => deleteTransaction(txn.id)} className="text-sm text-red-600">X</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;