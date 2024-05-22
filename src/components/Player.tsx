import "./player.css";
import React from "react";
import { usePlayerStateManager } from "../hooks/usePlayerStateManager";

interface PlayerProps {
  id: number;
}

export const Player: React.FC<PlayerProps> = ({ id }) => {
  const {
    name,
    handleNameChange,
    score,
    increaseScore,
    undoScore,
    resetScore,
    flash,
  } = usePlayerStateManager(id);

  return (
    <div className="playerContainer">
      <div className="topBar">
        <input
          className="playerName"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="bottomBar">
        <button onClick={() => increaseScore(1)}>+1</button>
        <button onClick={() => increaseScore(3)}>+3</button>
        <button onClick={() => increaseScore(5)}>+5</button>
        <div key={flash} className={"score flash"}>
          {score}
        </div>
        <button className="red" onClick={undoScore}>
          <i className="fa-solid fa-rotate-left"></i>
        </button>
        <button className="red" onClick={resetScore}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};
