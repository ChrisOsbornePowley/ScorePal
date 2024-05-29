import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { usePlayerManager } from "../hooks/usePlayerManager";
import { NewPlayer } from "../components/NewPlayer";
import "./setupPlayers.css";

export const SetupPlayers = () => {
  const { playerIds, addNewPlayer, removePlayer, resetAll } =
    usePlayerManager();

  const navigate = useNavigate();

  return (
    <div className="playersContainer">
      <h2>Enter your players</h2>
      {playerIds.map((id) => (
        <div className="playerContainer" key={id}>
          <NewPlayer id={id} />
          <Button
            size="small"
            colour="red"
            text="Remove"
            onClick={() => removePlayer(id)}
          />
        </div>
      ))}

      <Button
        size="medium"
        colour="green"
        text="Add New Player"
        onClick={addNewPlayer}
      />
      <Button
        size="medium"
        colour="red"
        text="Remove All Players"
        onClick={resetAll}
      />
      <Button
        size="big"
        colour="green"
        text="Continue"
        onClick={() => navigate("/scoring")}
      />
    </div>
  );
};
