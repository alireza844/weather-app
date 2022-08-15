import React from "react";

import SetCity from "./Components/SetCity";
import HomePage from './Components/HomePage'

function App() {

  return (
    <div>
      {console.log(localStorage)}
      {
        !localStorage.length
        ? <SetCity />
        : <HomePage />
      }
    </div>
  );
}

export default App;
