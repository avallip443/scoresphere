import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StatsTable from "./StatsTable";
import NationData from "../../utils/nations.json";

const PositionStats: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [players, setPlayers] = useState([]);

  const getCodeByName = (name: string) => {
    const country = NationData.find((country) => country.name === name);
    return country ? country.code : null; // Return code or null if not found
  };


  useEffect(() => {
    const fetchPlayers = async () => {
      if (name) {
        const nationCode = getCodeByName(name);

        try {
          const response = await fetch(
            `http://localhost:8080/api/player/nation/${nationCode?.toLowerCase()}`
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
