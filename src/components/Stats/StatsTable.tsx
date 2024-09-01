import React, { useState } from "react";

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

const data: PlayerStats[] = [
  {
    name: "APLAYERNAME",
    nation: "SPAIN",
    team: "FC BARCELONA",
    position: "Forward",
    age: 25,
    matchesPlayed: 20,
    goals: 10,
    assists: 5,
    yellowCards: 3,
    redCards: 1,
  },
  {
    name: "C PLAYER NAME",
    nation: "FRANCE",
    team: "SEVILLA",
    position: "Midfielder",
    age: 20,
    matchesPlayed: 10,
    goals: 20,
    assists: 2,
    yellowCards: 2,
    redCards: 2,
  },
  {
    name: "B PLAYER NAME",
    nation: "BRAZIL",
    team: "REAL MADRID",
    position: "Defender",
    age: 26,
    matchesPlayed: 15,
    goals: 2,
    assists: 1,
    yellowCards: 1,
    redCards: 3,
  },
];

const StatsTable: React.FC = () => {
  const [sortedData, setSortedData] = useState<PlayerStats[]>(data);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

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
            <th onClick={() => sortByString("position")}>Pos</th>
            <th
              className="border-r border-gray-300"
              onClick={() => sortByNumber("age")}
            >
              Age
            </th>
            <th onClick={() => sortByNumber("matchesPlayed")}>
              MP
            </th>
            <th onClick={() => sortByNumber("goals")}>Gls</th>
            <th onClick={() => sortByNumber("assists")}>Ast</th>
            <th
              className="border-r border-gray-300"
              onClick={sortByGoalsPerMatch}
            >
              GPM
            </th>
            <th onClick={() => sortByNumber("yellowCards")}>YCrds</th>
            <th onClick={() => sortByNumber("redCards")}>Rcrds</th>
          </tr>
        </thead>

        <tbody>
          {sortedData.map((player, index) => (
            <tr key={index} className="even:bg-gray-200 text-center ">
              <td
                className={`left-0 sticky ${
                  index % 2 === 0 ? "bg-[#ffffff]" : "bg-gray-200"
                }`}
              >
                {player.name}
              </td>
              <td>{player.nation}</td>
              <td>{player.team}</td>
              <td>{player.position}</td>
              <td>{player.age}</td>
              <td>{player.matchesPlayed}</td>
              <td>{player.goals}</td>
              <td>{player.assists}</td>
              <td>
                {Math.round((player.goals / player.matchesPlayed) * 100) / 100}
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
