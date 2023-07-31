import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [add, setAdd] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAdd(false);
  };

  const addNewExpenseClickHandler = () => {
    setAdd(true);
  };

  const stopAdd = () => {
    setAdd(false);
  };
  return (
    <div className="new-expense">
      {!add && (
        <button onClick={addNewExpenseClickHandler}>Add New Expense</button>
      )}
      {add && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopAdd}
        />
      )}
    </div>
  );
};

export default NewExpense;
