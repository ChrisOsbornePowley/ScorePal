import React from "react";
import "./button.css";

interface ButtonProps {
  size: string;
  colour: string;
  text?: string;
  icon?: string; //not sure if this is right
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  size,
  text,
  colour,
  icon,
  onClick,
}) => {
  return (
    <button className={`button ${size} ${colour}`} onClick={onClick}>
      {icon && <i className={icon}></i>}
      {text}
    </button>
  );
};
