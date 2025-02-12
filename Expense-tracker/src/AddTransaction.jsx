import React from "react";
import { useNavigate } from "react-router-dom";

const AddTransaction = (props) => {
  const navigate = useNavigate();
  const [text, setText] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) {
      alert("Please add a text and amount");
      return;
    }
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount,
    };
    props.addTransactions(newTransaction);
    setText("");
    setAmount("");
    navigate("/");
  };
  return (
    <div className="add-transaction">
      <h3 className="form-title">Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Description"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
