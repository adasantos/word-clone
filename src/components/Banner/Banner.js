import React from "react";

function Banner({ status, children, handleRestart }) {
  return (
    <div className={`${status} banner`}>
      {children}
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
}

export default Banner;
