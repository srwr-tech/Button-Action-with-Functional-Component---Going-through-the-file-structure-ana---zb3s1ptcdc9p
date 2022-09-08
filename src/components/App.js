import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [renderPara, setRenderPara] = useState(false);

  const buttonClickHandler = () => {
    setRenderPara(true);
  }

  const renderParaOrButton = () => {
    if(renderPara) {
      return <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
    } else {
      return <button id="click" onClick={buttonClickHandler}>Click Me</button>
    }
  }

  return (
    <div id="main">
      {renderParaOrButton()}
    </div>
  );
}


export default App;
