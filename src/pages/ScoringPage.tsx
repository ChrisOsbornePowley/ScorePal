import "./scoringPage.css";
import { Player } from "../components/Player";
import React, { useState, useRef, useEffect } from "react";

export const ScoringPage = () => {

  const [playerIds, setPlayerIds] = useState<number[]>(() => {
    const savedPlayerIds = localStorage.getItem("playerIds");
    return savedPlayerIds ? JSON.parse(savedPlayerIds) : [];
  });

  const addButtonRef = useRef<HTMLButtonElement>(null);

  const addNewPlayer = () => {
    const newPlayerId = playerIds.length > 0 ? Math.max(...playerIds) + 1 : 1;
    const updatedPlayerIds = [...playerIds, newPlayerId];
    setPlayerIds(updatedPlayerIds);
    localStorage.setItem("playerIds", JSON.stringify(updatedPlayerIds));
  };

  const removePlayer = (id: number) => {
    const updatedPlayerIds = playerIds.filter((playerId) => playerId !== id);
    setPlayerIds(updatedPlayerIds);
    localStorage.setItem("playerIds", JSON.stringify(updatedPlayerIds));
    localStorage.removeItem(`player-${id}-name`);
    localStorage.removeItem(`player-${id}-score`);
    localStorage.removeItem(`player-${id}-history`);
  };

  const resetAll = () => {
    playerIds.forEach((id) => {
      localStorage.removeItem(`player-${id}-name`);
      localStorage.removeItem(`player-${id}-score`);
      localStorage.removeItem(`player-${id}-history`);
    });
    localStorage.removeItem("playerIds");
    setPlayerIds([]);
  };

  useEffect(() => {
    if (addButtonRef.current) {
      addButtonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [playerIds]);

  return (
    <div className="scorePageContainer">
      {playerIds.map((id) => (
        <div className="playerContainer" key={id}>
          <Player id={id} />
          <button className="smallButton" onClick={() => removePlayer(id)}>
            <i className="fa-solid fa-square-xmark"></i>
          </button>
        </div>
      ))}
      <button ref={addButtonRef} className="bigButton green" onClick={addNewPlayer}>
        Add New Player
      </button>
      <button className="bigButton red" onClick={resetAll}>
        Remove Everything
      </button>
    </div>
  );
};
