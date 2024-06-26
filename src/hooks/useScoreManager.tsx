import { useEffect, useState } from "react";

export const useScoreManager = (id: number) => {
  const [score, setScore] = useState(() => {
    const savedScore = sessionStorage.getItem(`player-${id}-score`);
    return savedScore ? parseInt(savedScore) : 0;
  });

  const [history, setHistory] = useState<number[]>(() => {
    const savedHistory = sessionStorage.getItem(`player-${id}-history`);
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    sessionStorage.setItem(`player-${id}-score`, score.toString());
    sessionStorage.setItem(`player-${id}-history`, JSON.stringify(history));
  }, [id, score, history]);

  const increaseScore = (value: number) => {
    setScore(score + value);
    setHistory([...history, value]);
  };

  const undoScore = () => {
    if (history.length === 0) {
      return;
    }
    setScore(score - history[history.length - 1]);
    setHistory(history.slice(0, -1));
  };

  const resetScore = () => {
    setScore(0);
    setHistory([]);
  };

  return {
    score,
    increaseScore,
    undoScore,
    resetScore,
  };
};
