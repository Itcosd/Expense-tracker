import React, { useEffect } from "react";

const TransactionList = (props) => {
    
  const { transactions } = props;
  return (
    <div className="transaction-list">
      <h3>History</h3>

      {transactions.map((transaction) => (
        <div key={transaction.id} className="transaction">
          <span className={transaction.amount > 0 ? "transaction-income" : "transaction-expense"}>{transaction.text}</span>
          <span className={transaction.amount > 0 ? "transaction-income" : "transaction-expense"}> {transaction.amount}</span>
          <button onClick={() =>{props.deleteTransaction(transaction.id)}}>Delete</button>
        </div>

      ))}
    </div>
  );
};

export default TransactionList;
