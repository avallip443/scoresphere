import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StatsTable from "./StatsTable";
import PositionData from "../../utils/positions.json";

const PositionStats: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [players, setPlayers] = useState([]);

  const getCodeByPosition = (name: string) => {
    const position = PositionData.find((position) => position.name === name);
    return position ? position.code : null; // return code or null if not found
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      if (name) {
        const positionCode = getCodeByPosition(name);
        console.log(positionCode);

        try {
          const response = await fetch(
            `http://localhost:8080/api/player/position/${positionCode}`
          );
          const data = await response.json();
          setPlayers(data);
        } catch (error) {
          console.error("Error fetching players:", error);
        }
      } else {
        console.warn("Team name is undefined");
      }
    };

    fetchPlayers();
  }, [name]);

  return (
    <div className="w-full flex items-start justify-center">
      <div className="w-full flex flex-col items-center justify-center mt-4 mb-16">
        <h1 className="text-3xl mt-6 text-secondary mb-4">{name} Players</h1>
        <StatsTable players={players} />
      </div>
    </div>
  );
};

export default PositionStats;
