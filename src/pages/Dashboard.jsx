import React from 'react';
import Balance from '../components/Balance';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import SpendingChart from '../components/SpendingChart';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2 className="section-title">Dashboard</h2>

      <div className="dashboard-grid">
        <div className="card card-balance">
          <Balance />
        </div>
        <div className="card card-income">
          <TransactionForm type="income" />
        </div>
        <div className="card card-expense">
          <TransactionForm type="expense" />
        </div>
      </div>

      <div className="card">
        <h3>Income Transactions</h3>
        <TransactionList filterType="income" />
      </div>

      <div className="card">
        <h3>Expense Transactions</h3>
        <TransactionList filterType="expense" />
      </div>

      <div className="card">
        <SpendingChart />
      </div>
    </div>
  );
};

export default Dashboard;
