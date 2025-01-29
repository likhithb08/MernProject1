import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [transaction, setTransaction] = useState({
    title: "",
    amount: "",
    type: "expense",
  });

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!transaction.title || !transaction.amount) return;
    addTransaction(transaction);
    setTransaction({ title: "", amount: "", type: "expense" });
  };

  return (
    <form className="p-4 border rounded" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Transaction Title"
        value={transaction.title}
        onChange={handleChange}
        className="block w-full p-2 mb-2 border rounded"
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={transaction.amount}
        onChange={handleChange}
        className="block w-full p-2 mb-2 border rounded"
      />
      <select
        name="type"
        value={transaction.type}
        onChange={handleChange}
        className="block w-full p-2 mb-2 border rounded"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
