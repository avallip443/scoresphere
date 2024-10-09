import React, { useEffect, useState } from "react";
import axios from "axios";
import NationData from "../../utils/nations.json";

interface PlayerStats {
  name: string;
  nation: string;
  team: string;
  position: string;
  age: number;
  matchesPlayed: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
}

interface StatsTableProps {
  players?: PlayerStats[];
  query?: string;
}

const StatsTable: React.FC<StatsTableProps> = ({ players, query }) => {
  const [sortedData, setSortedData] = useState<PlayerStats[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/player");
        setSortedData(response.data);
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    if (players && players.length > 0) {
      setSortedData(players);
    } else {
      fetchPlayers();
    }
  }, [players]);

  const sortByString = (key: keyof PlayerStats) => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    const sorted = [...sortedData].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      if (typeof aValue === "string" && typeof bValue === "string") {
        if (newSortOrder === "asc") {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      }
      return 0;
    });
    setSortedData(sorted);
    setSortOrder(newSortOrder);
  };

  const sortByNumber = (key: keyof PlayerStats) => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    const sorted = [...sortedData].sort((a, b) => {
      if (newSortOrder === "asc") {
        return (a[key] as number) - (b[key] as number);
      } else {
        return (b[key] as number) - (a[key] as number);
      }
    });
    setSortedData(sorted);
    setSortOrder(newSortOrder);
  };

  const sortByGoalsPerMatch = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    const sorted = [...sortedData].sort((a, b) => {
      const aGoalsPerMatch =
        a.matchesPlayed > 0 ? a.goals / a.matchesPlayed : 0;
      const bGoalsPerMatch =
        b.matchesPlayed > 0 ? b.goals / b.matchesPlayed : 0;

      if (newSortOrder === "asc") {
        return aGoalsPerMatch - bGoalsPerMatch;
      } else {
        return bGoalsPerMatch - aGoalsPerMatch;
      }
    });
    setSortedData(sorted);
    setSortOrder(newSortOrder);
  };

  const getNationByCode = (code: string) => {
    const country = NationData.find((country) => country.code === code);
    return country ? country.name : null;
  };

  const filteredData = query
    ? sortedData.filter((player) =>
        player.name.toLowerCase().includes(query.toLowerCase())
      )
    : sortedData;


  return (
    <div className="w-11/12 overflow-x-auto">
      <table className="w-full mt-3 table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-primary text-[#ffffff] text-center text-sm cursor-pointer">
            <th
              className="border-r border-gray-300 sticky left-0 h-fit bg-primary py-2"
              onClick={() => sortByString("name")}
            >
              Player
            </th>
            <th onClick={() => sortByString("nation")}>Nation</th>
            <th onClick={() => sortByString("team")}>Team</th>
            <th onClick={() => sortByString("position")}>
              <dfn style={{ fontStyle: "normal" }} title="Position">
                Pos
              </dfn>
            </th>
            <th
              className="border-r border-gray-300"
              onClick={() => sortByNumber("age")}
            >
              Age
            </th>
            <th onClick={() => sortByNumber("matchesPlayed")}>
              <dfn style={{ fontStyle: "normal" }} title="Matches played">
                MP
              </dfn>
            </th>
            <th onClick={() => sortByNumber("goals")}>
              <dfn style={{ fontStyle: "normal" }} title="Goals">
                Gls
              </dfn>
            </th>
            <th onClick={() => sortByNumber("assists")}>
              <dfn style={{ fontStyle: "normal" }} title="Assists">
                Ast
              </dfn>
            </th>
            <th
              className="border-r border-gray-300"
              onClick={sortByGoalsPerMatch}
            >
              <dfn style={{ fontStyle: "normal" }} title="Goals per match">
                GPM
              </dfn>
            </th>
            <th onClick={() => sortByNumber("yellowCards")}>
              <dfn style={{ fontStyle: "normal" }} title="Yellow cards">
                YCrds
              </dfn>
            </th>
            <th onClick={() => sortByNumber("redCards")}>
              <dfn style={{ fontStyle: "normal" }} title="Red cards">
                RCrds
              </dfn>
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((player, index) => (
            <tr key={index} className="even:bg-gray-200 text-center ">
              <td
                className={`left-0 sticky ${
                  index % 2 === 0 ? "bg-[#ffffff]" : "bg-gray-200"
                }`}
              >
                {player.name}
              </td>
              <td>
                {getNationByCode(player.nation?.toUpperCase()) || "Unknown"}
              </td>
              <td>{player.team.replace(/-/g, " ")}</td>
              <td>{player.position}</td>
              <td>{player.age}</td>
              <td>{player.matchesPlayed}</td>
              <td>{player.goals}</td>
              <td>{player.assists}</td>
              <td>
                {player.matchesPlayed > 0
                  ? Math.round((player.goals / player.matchesPlayed) * 100) /
                    100
                  : 0}
              </td>
              <td>{player.yellowCards}</td>
              <td>{player.redCards}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatsTable;
