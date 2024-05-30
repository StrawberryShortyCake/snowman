import React from "react";
import Snowman from "./Snowman.jsx";
import { randomWord, ENGLISH_WORDS} from "./words.js"
import "./App.css";

/** Renders page (with Snowman game) */


// want to pass in a word from parent
// parent must run a random word function

function App() {

  const word = randomWord(ENGLISH_WORDS)
  console.log("WORDDDD", word)

  return (
    <div className="App">
      <Snowman words={[word]} />
    </div>
  );
}

export default App;
