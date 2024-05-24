import React, { useState } from "react";
import { Button } from "./Button";
import { Score } from "./Score";
import { useScoreManager } from "../hooks/useScoreManager";
import "./playerCard.css";

interface PlayerCardProps {
  id: number;
  scoreButtons: number[];
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ id, scoreButtons }) => {
  const playerName = localStorage.getItem(`player-${id}-name`) || "Nameless";

  const { score, increaseScore, undoScore, resetScore } = useScoreManager(id);

  return (
    <div className="playerCardContainer">
      <div className="playerTop">
        <h2>{playerName}</h2>
        <Score score={score.toString()} />
      </div>
      <div className="playerBottom">
        <div className="scoreButtons">
          {scoreButtons.map((value: number) => (
            <Button
              key={value}
              size="number"
              colour="green"
              text={"+" + value.toString()}
              onClick={() => increaseScore(value)}
            />
          ))}
        </div>
        <div className="resetButtons">
          <Button
            size="number"
            colour="red"
            icon={"fa-solid fa-rotate-left"}
            onClick={() => undoScore()}
          />
          <Button
            size="number"
            colour="red"
            icon={"fa-solid fa-trash-can"}
            onClick={() => resetScore()}
          />
        </div>
      </div>
    </div>
  );
};
