import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, setEditing] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.OnAddExpense(expenseData);
    setEditing(false);
  }

  function startEditHandler() {
    setEditing(true);
  }

  function stopEditingHandler() {
    setEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditHandler}>Add a new expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancelButton={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
