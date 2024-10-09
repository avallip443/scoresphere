import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StatsTable from "./StatsTable";

const PositionStats: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [players, setPlayers] = useState([]);

  const normalizeName = (name: string): string => {
    return name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9 -]/g, "")
      .replace(/ /g, "-");
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      if (name) {
        const normalizedTeamName = normalizeName(name);
        try {
          const response = await fetch(
            `http://localhost:8080/api/player/team/${normalizeName(
              normalizedTeamName
            )}`
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
