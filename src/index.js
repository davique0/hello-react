import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Input = (props) => {
  return (
    <input
      value={props.word}
      onChange={(event) => props.setWord(event.target.value)}
      placeholder="Type your name"
    />
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.Text}</button>;
};

const Application = () => {
  const [word, setWord] = useState("");

  const reset = () => {
    console.log("reset");
    setWord("");
  };

  return (
    <main>
      <Input word={word} setWord={setWord} />
      <Button Text="Reset" onClick={reset} word={word} setWord={setWord} />
      {word && <h1>Hello {word}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
