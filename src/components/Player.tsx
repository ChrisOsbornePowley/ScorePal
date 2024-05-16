import "./player.css";
import React, { useState } from "react";

interface PlayerProps {
  id: number;
}

export const Player: React.FC<PlayerProps> = ({ id }) => {
  const [name, setName] = useState("Player " + id);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState<number[]>([]);

  const increaseScore = (value: number) => {
    setScore(score + value);
    setHistory([...history, value]);
  };

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const undoScore = () => {
    if (history.length === 0) {
      return;
    }
    setScore(score - history[history.length - 1]);
    setHistory(history.slice(0, -1));
  };

  const resetScore = () => {
    setScore(0);
    setHistory([]);
  };

  return (
    <div className="playerContainer">
      <div className="leftContainer">
        <input
          className="playerName"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <div className="buttonContainer">
          <button onClick={() => increaseScore(1)}>+1</button>
          <button onClick={() => increaseScore(3)}>+3</button>
          <button onClick={() => increaseScore(5)}>+5</button>
        </div>
      </div>
      <div className="rightContainer">
        <div className="scoreContainer">{score}</div>
        <div className="resetContainer">
          <button onClick={undoScore}>Undo</button>
          <button onClick={resetScore}>Reset</button>
        </div>
      </div>
    </div>
  );
};
