import React from "react";
import Tours from "./components/Tours";
import data from "./data";
import {useState} from "react";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeCard(id){
    const newTours = tours.filter(tours => tours.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return (
      <div className="refresh" >
        <h2 className="myName" >No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removecard={removeCard}></Tours>
    </div>
  )
};

export default App;
