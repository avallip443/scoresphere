import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StatsTable from "./StatsTable";

const PositionStats: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Fetch players for the selected position from your API
    const fetchPlayers = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/player/position/${name}`
        );
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchPlayers();
  }, [name]);

  return (
    <div>
      <h1 className="text-2xl mt-6 text-secondary">{name} Players</h1>
      <StatsTable />
    </div>
  );
};

export default PositionStats;
