import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <Link to="/">
      <div className="header">
        <h1>SimpleScorer</h1>
      </div>
    </Link>
  );
};
