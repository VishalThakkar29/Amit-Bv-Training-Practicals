import React, { useState } from 'react';
import Button from "./components/UI/Button/Button"
import './App.css';

function App() {
  const [showPara, setParaState] = useState(false);
  const paraButtonHandler = () => {
    setParaState((prevState) => !prevState);
    console.log("Clicked")
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>

      {showPara && <p>This is hidden text</p>}
      <Button onClick={paraButtonHandler}>Click to see Para</Button>
    </div>
  );
}

export default App;
