import "./scoringPage.css";
import { Player } from "../components/Player";
import React, { useState, useRef, useEffect } from "react";

export const ScoringPage = () => {
  const [playerIds, setPlayerIds] = useState<number[]>([]);
  const addButtonRef = useRef<HTMLButtonElement>(null);

  const addNewPlayer = () => {
    const newPlayerId = playerIds.length > 0 ? Math.max(...playerIds) + 1 : 1;
    setPlayerIds([...playerIds, newPlayerId]);

    if (addButtonRef.current) {
      addButtonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const removePlayer = (id: number) => {
    setPlayerIds(playerIds.filter((playerId) => playerId !== id));
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
          <button className="removeButton" onClick={() => removePlayer(id)}>
            <i className="fa-solid fa-square-xmark"></i>
          </button>
        </div>
      ))}
      <button ref={addButtonRef} className="addButton" onClick={addNewPlayer}>
        Add New Player
      </button>
    </div>
  );
};
