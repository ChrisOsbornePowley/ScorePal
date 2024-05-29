import React from "react";
import { usePlayerManager } from "../hooks/usePlayerManager";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

interface Player {
  id: number;
  name: string;
  score: number;
}

export const GameResults: React.FC = () => {
  const navigate = useNavigate();
  const { playerIds, resetAllScores } = usePlayerManager();

  const players: Player[] = playerIds.map((id) => ({
    id,
    name: sessionStorage.getItem(`player-${id}-name`) || "",
    score: parseInt(sessionStorage.getItem(`player-${id}-score`) || "0", 10),
  }));

  const sortedPlayers = players.sort((a, b) => b.score - a.score);

  const getPositionMessage = (index: number): string => {
    switch (index) {
      case 0:
        return "The winner was";
      case 1:
        return "The runner-up was";
      default:
        return `In position ${index + 1},`;
    }
  };

  const playAgain = () => {
    resetAllScores();
    navigate("/play");
  };

  const backToHome = () => {
    resetAllScores();
    navigate("/");
  };

  return (
    <div>
      <h2>The final scores were... </h2>
      {sortedPlayers.map((player, index) => (
        <div style={{ color: "white" }} key={player.id}>
          <h1>
            {getPositionMessage(index)} {player.name} with {player.score}
          </h1>
        </div>
      ))}
      <Button
        size="big"
        colour="red"
        text="Back to game"
        onClick={() => navigate("/play")}
      />
      <Button
        size="big"
        colour="green"
        text="Play new round"
        onClick={playAgain}
      />
      <Button size="medium" colour="green" text="Home" onClick={backToHome} />
    </div>
  );
};
