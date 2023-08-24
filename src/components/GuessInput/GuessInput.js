import React from "react";

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess("");
  }

  function handleChange(event) {
    const nextTentativeGuess = event.target.value.toUpperCase();

    setTentativeGuess(nextTentativeGuess);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        value={tentativeGuess}
        onChange={handleChange}
        pattern="[A-Za-z]{5}"
        disabled={gameStatus !== "running"}
      ></input>
    </form>
  );
}

export default GuessInput;
