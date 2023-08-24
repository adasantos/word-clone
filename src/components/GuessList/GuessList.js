import React from "react";

import Guess from "../Guess";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessList({ validatedGuesses, answer }) {
  const guessBoxes = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {guessBoxes.map((num) => (
        <Guess key={num} value={validatedGuesses[num]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessList;
