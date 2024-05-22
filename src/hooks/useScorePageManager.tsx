import { useState } from "react";

export const useScorePageManager = () => {
  const [playerIds, setPlayerIds] = useState<number[]>(() => {
    const savedPlayerIds = localStorage.getItem("playerIds");
    return savedPlayerIds ? JSON.parse(savedPlayerIds) : [];
  });

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

  return { playerIds, addNewPlayer, removePlayer, resetAll };
};
