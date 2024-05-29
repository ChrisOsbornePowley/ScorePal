import { useState } from "react";

export const usePlayerManager = () => {
  const [playerIds, setPlayerIds] = useState<number[]>(() => {
    const savedPlayerIds = sessionStorage.getItem("playerIds");
    return savedPlayerIds ? JSON.parse(savedPlayerIds) : [];
  });

  const addNewPlayer = () => {
    const newPlayerId = playerIds.length > 0 ? Math.max(...playerIds) + 1 : 1;
    const updatedPlayerIds = [...playerIds, newPlayerId];
    setPlayerIds(updatedPlayerIds);
    sessionStorage.setItem("playerIds", JSON.stringify(updatedPlayerIds));
  };

  const removePlayer = (id: number) => {
    const updatedPlayerIds = playerIds.filter((playerId) => playerId !== id);
    setPlayerIds(updatedPlayerIds);
    sessionStorage.setItem("playerIds", JSON.stringify(updatedPlayerIds));
    sessionStorage.removeItem(`player-${id}-name`);
    sessionStorage.removeItem(`player-${id}-score`);
    sessionStorage.removeItem(`player-${id}-history`);
  };

  const resetAllScores = () => {
    playerIds.forEach((id) => {
      sessionStorage.removeItem(`player-${id}-score`);
      sessionStorage.removeItem(`player-${id}-history`);
    });
  };

  const resetAll = () => {
    playerIds.forEach((id) => {
      sessionStorage.removeItem(`player-${id}-name`);
      sessionStorage.removeItem(`player-${id}-score`);
      sessionStorage.removeItem(`player-${id}-history`);
    });
    sessionStorage.removeItem("playerIds");
    setPlayerIds([]);
  };

  return { playerIds, addNewPlayer, removePlayer, resetAllScores, resetAll };
};
