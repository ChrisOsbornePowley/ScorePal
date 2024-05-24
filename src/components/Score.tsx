import React from "react";
import "./score.css";

interface ScoreProps {
  score: string;
}

export const Score: React.FC<ScoreProps> = ({ score }) => {
  return <div className="score">{score}</div>;
};
