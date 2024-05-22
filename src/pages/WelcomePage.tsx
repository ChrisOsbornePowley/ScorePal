import { Link } from "react-router-dom";
import "./welcomePage.css";
import { Button } from "../components/Button";

export const WelcomePage = () => {
  return (
    <div className="container">
      <h2>Welcome to SimpleScorer</h2>
      <img src="/boardgamelogo.png" className="logo" alt="logo" />
      <p>A handy score tracker for board games and more!</p>
      <Link to="/setupplayers">
        <Button size="big" colour="green" text="Choose Players" />
      </Link>
      <Link to="/setupscoring">
        <Button size="big" colour="green" text="Choose Score Buttons" />
      </Link>
      <Link to="/playgame">
        <Button size="big" colour="green" text="Play Game" />
      </Link>
      <Link to="/about">
        <Button size="medium" colour="red" text="About SimpleScorer" />
      </Link>
    </div>
  );
};
