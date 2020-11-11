import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const { isParaShow, setState } = useState(false);

  function handleClick() {
    setState((isParaShow = true));
  }
  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        click me!
      </button>
      {this.state.isParaShow && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
    </div>
  );
}

export default App;
