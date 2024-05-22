import React from "react";
import { Button } from "./Button";
import "./playerCard.css";

interface PlayerCardProps {
  id: number;
  scoreButtons: number[];
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ id, scoreButtons }) => {
  const playerName = localStorage.getItem(`player-${id}-name`) || "Nameless";
  const playerScore = localStorage.getItem(`player-${id}-score`) || 0;

  return (
    <div className="playerCardContainer">
      <h2>{playerName}</h2>
      <h2>Score: {playerScore}</h2>
      {scoreButtons.map((value: number) => (
        <Button
          key={value}
          size="small"
          colour="green"
          text={value.toString()}
        />
      ))}
    </div>
  );
};
