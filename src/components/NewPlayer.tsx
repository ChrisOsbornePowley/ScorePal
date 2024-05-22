import React, { useEffect, useState } from "react";

interface PlayerProps {
  id: number;
}

export const NewPlayer: React.FC<PlayerProps> = ({ id }) => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem(`player-${id}-name`);
    return savedName ? savedName : "";
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem(`player-${id}-name`, name);
  });

  return (
    <div>
      <input
        type="text"
        value={name}
        required
        onChange={handleNameChange}
        placeholder="Enter player name"
      />
    </div>
  );
};
