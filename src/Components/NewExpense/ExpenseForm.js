import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //option 1 Multi state approach (used more)
  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");

  //option 2 single state approach as object(3nd method using prevState preffered in this)
  // const [UserInput,setUserInput]=useState({
  //    EnteredTitle:'',
  //   EnteredAmount: '' ,
  //  EnteredDate: '',
  //    })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    // ...UserInput,                      //spread operator to get old values
    //EnteredTitle: event.target.value,
    //})
    //setUserInput( (prevState) => {                        //always gives latest state update data
    //    return{...prevState, EnteredTitle: event.target.value, }
    //});
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...UserInput,
    // EnteredAmount: event.target.value,
    //})
    //  setUserInput( (prevState) => {                        //always gives latest state update data
    //  return{...prevState, EnteredAmount: event.target.value, }
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //...UserInput,
    //EnteredDate: event.target.value,
    //})

    // setUserInput( (prevState) => {                        //always gives latest state update data
    //    return{...prevState, EnteredDate: event.target.value, }
    //});
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: EnteredTitle,
      amount: +EnteredAmount,
      date: new Date(EnteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={EnteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.11"
            step="0.01"
            value={EnteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={EnteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
