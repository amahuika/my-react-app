import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpensesTotal from "./ExpensesTotal";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  function selectedYear(selectedYear) {
    setFilteredYear(selectedYear);
  }

  // filter by year
  const filteredExpenses = props.expenses.filter((expense) => {
    if (filteredYear === "all") {
      return expense;
    }
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onChangeFilter={selectedYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesTotal expenses={filteredExpenses} />

      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
