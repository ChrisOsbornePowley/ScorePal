import { useState, useEffect } from "react";

export const usePlayerStateManager = (id: number) => {
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem(`player-${id}-score`);
    return savedScore ? parseInt(savedScore) : 0;
  });

  const [history, setHistory] = useState<number[]>(() => {
    const savedHistory = localStorage.getItem(`player-${id}-history`);
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem(`player-${id}-score`, score.toString());
    localStorage.setItem(`player-${id}-history`, JSON.stringify(history));
  }, [id, score, history]);

  const [flash, setFlash] = useState(0);
  useEffect(() => {
    setFlash((prevKey) => prevKey + 1);
  }, [score]);

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
    flash,
  };
};
