import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await axios.get('/api/transactions');
      setTransactions(res.data);
    };
    fetchTransactions();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {transactions.map((t) => (
          <li key={t._id}>
            {t.type}: {t.category} - ${t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;