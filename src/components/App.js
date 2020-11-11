import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [isParaShow, setPara] = useState(false);

  function handleClick() {
    setPara(true);
  }
  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        click me!
      </button>
      {isParaShow && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
    </div>
  );
}

export default App;
