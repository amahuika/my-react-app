import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  /* const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  }); */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /*   setUserInput({
      ...userInput,
      title: event.target.value,
    }); */
    /*  setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    }); */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    /*   setUserInput({
      ...userInput,
      amount: event.target.value,
    }); */
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    /*    setUserInput({
      ...userInput,
      date: event.target.value,
    }); */
  };

  const submitHandler = (event) => {
    // stop page from reloading
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // send data to function in new expense component and execute
    props.onSaveExpenseData(expenseData);

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            step="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions ">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
