import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 94.12,
      date: new Date(2020, 7, 1),
    },
    {
      id: "e2",
      title: "Tooth Paste",
      amount: 12.99,
      date: new Date(2020, 4, 27),
    },
    {
      id: "e3",
      title: "Bananas",
      amount: 40.99,
      date: new Date(2021, 1, 11),
    },
    {
      id: "e4",
      title: "Dog Food",
      amount: 68.99,
      date: new Date(2022, 7, 14),
    },
  ];

  function addExpenseHandler(expense) {
    console.log(expense);
  }

  return (
    <div className="App">
      <NewExpense OnAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
