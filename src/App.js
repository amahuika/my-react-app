import React, { useState } from "react";

import Header from "./Components/Header/Header";
function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [apiResults, setApiResults] = useState("");

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
