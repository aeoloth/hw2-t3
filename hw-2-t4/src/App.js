import React from "react";
import "./App.css";
import { Card, Elevation } from "@blueprintjs/core";

function App() {
  const newsCard = (title, descr) => {
    <Card interactive={true} elevation={Elevation.TWO}>
      <h4>{title}</h4>
      <p>{descr}</p>
    </Card>;
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src="./citrus.jpg"  alt="citrus" />
      </header>
      <content></content>
    </div>
  );
}

export default App;
