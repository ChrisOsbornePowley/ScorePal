import { Link } from "react-router-dom";
import "./welcomePage.css";

export const WelcomePage = () => {
  return (
    <div className="container">
      <h2>Welcome to Score Pal</h2>
      <img src="/boardgamelogo.png" className="logo" alt="logo" />
      <p>A handy score tracker for board games and more!</p>
      <Link to="/scoring">
        <button className="welcomeButton">Start</button>
      </Link>
      <Link to="/about">
        <button className="welcomeButton">About</button>
      </Link>
    </div>
  );
};
