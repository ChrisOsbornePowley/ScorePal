import React from "react";
import { usePlayerManager } from "../hooks/usePlayerManager";
import { PlayerCard } from "../components/PlayerCard";

export const PlayGame = () => {
  const { playerIds } = usePlayerManager();

  const scoreButtonsStr = localStorage.getItem("chosenScoreButtons");
  let scoreButtons = scoreButtonsStr ? JSON.parse(scoreButtonsStr) : [1, 2];
  scoreButtons = scoreButtons.sort((a: number, b: number) => a - b);

  return (
    <div>
      {playerIds.map((id) => (
        <PlayerCard key={id} id={id} scoreButtons={scoreButtons} />
      ))}
    </div>
  );
};
