import React, { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

function TransactionForm() {
  const { addTransaction } = useContext(TransactionContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;
    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount)
    };
    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Add Transaction</h3>
      <input
        type="text"
        placeholder="Description"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Amount (use - for expense)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
}

export default TransactionForm;