import React from "react";
import "./button.css";

interface ButtonProps {
  size: string;
  colour: string;
  text: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  size,
  text,
  colour,
  onClick,
}) => {
  return (
    <button className={`button ${size} ${colour}`} onClick={onClick}>
      {text}
    </button>
  );
};
