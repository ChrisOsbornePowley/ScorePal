import "./scoringPage.css";
import { Player } from "../components/Player";
import React, { useRef, useEffect } from "react";
import { useScorePageManager } from "../hooks/useScorePageManager";

export const ScoringPage = () => {
  const { playerIds, addNewPlayer, removePlayer, resetAll } =
    useScorePageManager();

  const addButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (addButtonRef.current) {
      addButtonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [playerIds]);

  return (
    <div className="scorePageContainer">
      {playerIds.map((id) => (
        <div className="scoreCardContainer" key={id}>
          <Player id={id} />
          <button className="smallButton" onClick={() => removePlayer(id)}>
            <i className="fa-solid fa-square-xmark"></i>
          </button>
        </div>
      ))}
      <button
        ref={addButtonRef}
        className="bigButton green"
        onClick={addNewPlayer}
      >
        Add New Player
      </button>
      <button className="bigButton red" onClick={resetAll}>
        Remove Everything
      </button>
    </div>
  );
};
