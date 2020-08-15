import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Names from "./Names";
import Cars from "./Cars";

export const AppContext = React.createContext();

function App() {
  const [cars, setCars] = useState([]);

  return (
    <AppContext.Provider value={{
      cars,
      rm: (id) => setCars(cars.filter(c => c.id !== id)),
      add: (model) => setCars([...cars,{id:new Date().getTime(), model}])
    }}>
      <div className="App">
        <Counter />
        <hr />
        <Names />
        <hr/>
        <Cars/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
