import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Card, Elevation } from "@blueprintjs/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <content>

 
 <Card interactive={true} elevation={Elevation.TWO}>
     <h5><a href="#">Card heading</a></h5>
     <p>Card content</p>
     <Button>Submit</Button>
 </Card>
      </content>
    </div>
  );
}

export default App;
