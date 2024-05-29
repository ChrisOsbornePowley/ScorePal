import React from "react";
import { usePlayerManager } from "../hooks/usePlayerManager";
import { PlayerCard } from "../components/PlayerCard";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const PlayGame = () => {
  const navigate = useNavigate();
  const { playerIds } = usePlayerManager();

  const scoreButtonsStr = sessionStorage.getItem("chosenScoreButtons");
  let scoreButtons = scoreButtonsStr ? JSON.parse(scoreButtonsStr) : [1, 2];
  scoreButtons = scoreButtons.sort((a: number, b: number) => a - b);

  return (
    <div>
      {playerIds.map((id) => (
        <PlayerCard key={id} id={id} scoreButtons={scoreButtons} />
      ))}
      <Button
        size="big"
        colour="green"
        text="Finish Game"
        onClick={() => navigate("/results")}
      />
    </div>
  );
};
