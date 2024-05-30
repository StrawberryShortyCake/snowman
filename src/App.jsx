import React from "react";
import Snowman from "./Snowman.jsx";
import { ENGLISH_WORDS } from "./words.js";
import "./App.css";

/** Renders page (with Snowman game) */


// want to pass in a word from parent
// parent must run a random word function

function App() {

  return (
    <div className="App">
      <Snowman words={ENGLISH_WORDS} />
    </div>
  );
}

export default App;
