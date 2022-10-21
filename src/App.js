import Expenses from "./Components/Expenses";

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

  return (
    <div className="App">
      <h1>Lets go react</h1>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
