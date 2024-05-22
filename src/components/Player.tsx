import "./player.css";
import React, { useState, useEffect } from "react";

interface PlayerProps {
  id: number;
}

export const Player: React.FC<PlayerProps> = ({ id }) => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem(`player-${id}-name`);
    return savedName ? savedName : "Player " + id;
  });

  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem(`player-${id}-score`);
    return savedScore ? parseInt(savedScore) : 0;
  });

  const [history, setHistory] = useState<number[]>(() => {
    const savedHistory = localStorage.getItem(`player-${id}-history`);
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem(`player-${id}-name`, name);
    localStorage.setItem(`player-${id}-score`, score.toString());
    localStorage.setItem(`player-${id}-history`, JSON.stringify(history));
  }, [id, name, score, history]);

  const [flash, setFlash] = useState(0);
  useEffect(() => {
    setFlash(prevKey => prevKey + 1);
  }, [score]);


  const increaseScore = (value: number) => {
    setScore(score + value);
    setHistory([...history, value]);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <div key={flash} className={"score flash"}>{score}</div>
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
