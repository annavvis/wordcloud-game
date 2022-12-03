import React from "react";
import { useContext, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Wordcloud Game</h1>
        <form>
          <input type="text" placeholder="Enter your nickname here..." />
          <button>play</button>
        </form>
      </div>
    </div>
  );
}

export default App;
