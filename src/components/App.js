import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [p, setState] = useState("");
  const para = (
    <p id="para">
      Hello, I've learnt to use the full-stack evaluation tool. This makes me so
      happy
    </p>
  );
  handleClick = () => {
    setState(para);
  };
  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        click me!
      </button>
      {p}
    </div>
  );
}

export default App;
