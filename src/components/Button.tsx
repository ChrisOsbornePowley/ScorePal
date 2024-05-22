import React from "react";
import "./button.css";

interface ButtonProps {
  size: string;
  colour: string;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ size, text, colour }) => {
  return <button className={`button ${size} ${colour}`}>{text}</button>;
};
