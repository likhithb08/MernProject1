import React, { useState } from "react";
import TransactionForm from "../components/TransactionForm";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <TransactionForm addTransaction={addTransaction} />
      <ul className="mt-4">
        {transactions.map((t) => (
          <li key={t.id} className="p-2 border-b">
            {t.title} - {t.amount} ({t.type})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
