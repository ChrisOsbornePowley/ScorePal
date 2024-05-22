import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import "./setupScoring.css";

export const SetupScoring = () => {
  const navigate = useNavigate();
  const scoreButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [chosenScoreButtons, setChosenScoreButtons] = useState<number[]>(() => {
    const savedButtons = localStorage.getItem("chosenScoreButtons");
    return savedButtons ? JSON.parse(savedButtons) : [1, 3, 5];
  });

  useEffect(() => {
    localStorage.setItem(
      "chosenScoreButtons",
      JSON.stringify(chosenScoreButtons)
    );
  }, [chosenScoreButtons]);

  const handleButtonClick = (value: number) => {
    setChosenScoreButtons((prevState) => {
      if (prevState.includes(value)) {
        return prevState.filter((item) => item !== value);
      } else {
        return [...prevState, value];
      }
    });
  };

  return (
    <div className="scoresContainer">
      <h2>Select which score buttons to use</h2>
      {scoreButtons.map((value, index) => (
        <Button
          key={value}
          size="medium"
          colour={chosenScoreButtons.includes(value) ? "green" : "red"}
          text={value.toString()}
          onClick={() => handleButtonClick(value)}
        />
      ))}
      <Button
        size="big"
        colour="green"
        text="Start Game"
        onClick={() => navigate("/playgame")}
      />
    </div>
  );
};
