import React from "react";
import { Link} from "react-router-dom";

const Navbar = (props) => {

  return (
    <div>
      <nav className="navbar">
        <h1>Expense Tracker</h1>
        <div className="balance">
            <h3>Balance - {props.total}</h3>
            <h3>Income - {props.income}</h3>
            <h3>Expense - {-props.expense}</h3>
        </div>
        <div className="nav-links">
          <Link  className="nav-link" to="/" >Home</Link> 

          <Link className="nav-link" to="/addtransaction">Add Transaction</Link>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
