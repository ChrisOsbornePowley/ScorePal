import React from "react";
import { useScorePageManager } from "../hooks/useScorePageManager";

export const PlayGame = () => {
  const { playerIds } = useScorePageManager();

  return (
    <div>
      {playerIds.map((id) => (
        <div>Player {id}</div>
      ))}
    </div>
  );
};
