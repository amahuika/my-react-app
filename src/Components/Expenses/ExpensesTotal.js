function ExpensesTotal(props) {
  const totalExpenses = props.expenses.reduce((accu, object) => {
    return accu + object.amount;
  }, 0);
  return (
    <div>
      <p style={{ color: "white" }}>
        Total Expenses: <span>{totalExpenses.toFixed(2)}</span>
      </p>
    </div>
  );
}

export default ExpensesTotal;
