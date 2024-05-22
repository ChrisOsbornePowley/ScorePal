import { useNavigate } from "react-router-dom";
import "./welcomePage.css";
import { Button } from "../components/Button";

export const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2>Welcome to SimpleScorer</h2>
      <img src="/boardgamelogo.png" className="logo" alt="logo" />
      <p>A handy score tracker for board games and more!</p>
      <Button
        size="medium"
        colour="green"
        text="Choose Players"
        onClick={() => navigate("/setupplayers")}
      />
      <Button
        size="medium"
        colour="green"
        text="Choose Score Buttons"
        onClick={() => navigate("/setupscoring")}
      />
      <Button
        size="big"
        colour="green"
        text="Play Game"
        onClick={() => navigate("/playgame")}
      />
      <Button
        size="medium"
        colour="red"
        text="About SimpleScorer"
        onClick={() => navigate("/about")}
      />
    </div>
  );
};
