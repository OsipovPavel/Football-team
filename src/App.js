import React from "react";
import FirstComp from "./FirstComp";
import SecondComp from "./SecondComp";
import ThirdComp from "./ThirdComp";

function App() {
  const Football1 = {name: "Real", city: "Madrid", year: 1805};
  const Football2 = {medal: 48, cup: 16};
  const Football3 = [
    {id: 1, firstname: "Andrey", lastname: "Prokurin"},
    {id: 2, firstname: "Maxim", lastname: "Prokurin"},
    {id: 3, firstname: "Sergey", lastname: "Prokurin"},
    {id: 4, firstname: "Alex", lastname: "Prokurin"},
    {id: 5, firstname: "John", lastname: "Prokurin"},
    {id: 6, firstname: "Roberto", lastname: "Prokurin"},
    {id: 7, firstname: "Anthony", lastname: "Prokurin"},
    {id: 8, firstname: "Alexey", lastname: "Prokurin"},
    {id: 9, firstname: "Molly", lastname: "Prokurin"},
    {id: 10, firstname: "Holly", lastname: "Prokurin"},
    {id: 11, firstname: "Nick", lastname: "Prokurin"}
  ];
  return (
    <div className="App">
      <FirstComp a={Football1}/>
      <SecondComp p={Football2}/>
      <ThirdComp items={Football3}/>
    </div>
    
  );
}


export default App;
