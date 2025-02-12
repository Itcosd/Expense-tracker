import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
import AddTransaction from "./AddTransaction";
import Navbar from "./Navbar";
import TransactionList from "./TransactionList";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    if (transaction.amount > 0) {
      setIncome(income + transaction.amount);
    } else {
      setExpense(expense + transaction.amount);
    }
    setTotal(total + transaction.amount);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
    const transaction = transactions.find(
      (transaction) => transaction.id === id
    );
    if (transaction.amount > 0) {
      setIncome(income - transaction.amount);
    } else {
      setExpense(expense - transaction.amount);
    }
    setTotal(total - transaction.amount);
  };


  return (
    <>
      <div className="main">
        <Router>
          <Navbar total={total} income={income} expense={expense} />
          <Routes>
            <Route
              path="/"
              element={
                <TransactionList
                  transactions={transactions}
                  deleteTransaction={deleteTransaction}
                />
              }
            />
            <Route
              path="/addtransaction"
              element={
                <AddTransaction
                  transactions={transactions}
                  addTransactions={addTransaction}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
