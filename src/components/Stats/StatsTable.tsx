import React, { useState } from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";

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
    name: "A PLAYER NAME",
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
    <table className="w-11/12 mt-3 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-primary text-[#ffffff]">
          <th
            className="border-r border-gray-300 p-2 cursor-pointer"
            onClick={() => sortByString("name")}
          >
            <div className="flex justify-between items-center">
              <p className="flex-grow text-center ml-5">Name</p>
              <Bars3BottomRightIcon className="h-5 w-5" />
            </div>
          </th>
          <th
            className="p-2 cursor-pointer"
            onClick={() => sortByString("nation")}
          >
            <div className="flex justify-between items-center">
              <p className="flex-grow text-center ml-5">Nation</p>
              <Bars3BottomRightIcon className="h-5 w-5" />
            </div>
          </th>
          <th
            className="p-2 cursor-pointer"
            onClick={() => sortByString("team")}
          >
            <div className="flex justify-between items-center">
              <p className="flex-grow text-center ml-5">Team</p>
              <Bars3BottomRightIcon className="h-5 w-5" />
            </div>
          </th>
          <th
            className="p-2 cursor-pointer"
            onClick={() => sortByString("position")}
          >
            <div className="flex justify-between items-center">
              <p className="flex-grow text-center ml-5">Position</p>
              <Bars3BottomRightIcon className="h-5 w-5" />
            </div>
          </th>
          <th
            className="border-r border-gray-300 p-2 cursor-pointer"
            onClick={() => sortByNumber("age")}
          >
            <div className="flex justify-between items-center">
              <p className="flex-grow text-center ml-5">Age</p>
              <Bars3BottomRightIcon className="h-5 w-5" />
            </div>
          </th>
          <th
            className="p-2 cursor-pointer"
            onClick={() => sortByNumber("matchesPlayed")}
          >
            <div className="flex justify-between items-center">
              <p className="flex-grow text-center ml-5">Matches Played</p>
              <Bars3BottomRightIcon className="h-5 w-5" />
            </div>
          </th>
          <th
            className="p-2 cursor-pointer"
            onClick={() => sortByNumber("goals")}
          >
            <div className="flex justify-between items-center">
              <p className="flex-grow text-center ml-5">Goals</p>
              <Bars3BottomRightIcon className="h-5 w-5" />
            </div>
          </th>
          <th
            className="p-2 cursor-pointer"
            onClick={() => sortByNumber("assists")}
          >
            <div className="flex justify-between items-center">
              <p className="flex-grow text-center ml-5">Assists</p>
              <Bars3BottomRightIcon className="h-5 w-5" />
            </div>
          </th>
          <th
            className="border-r border-gray-300 p-2 cursor-pointer"
            onClick={sortByGoalsPerMatch}
          >
            <div className="flex justify-between items-center">
              <p className="flex-grow text-center ml-5">Goals Per Match</p>
              <Bars3BottomRightIcon className="h-5 w-5" />
            </div>
          </th>
          <th
            className="p-2 cursor-pointer"
            onClick={() => sortByNumber("yellowCards")}
          >
            <div className="flex justify-between items-center">
              <p className="flex-grow text-center ml-5">Yellow Cards</p>
              <Bars3BottomRightIcon className="h-5 w-5" />
            </div>
          </th>
          <th
            className="p-2 cursor-pointer"
            onClick={() => sortByNumber("redCards")}
          >
            <div className="flex justify-between items-center">
              <p className="flex-grow text-center ml-5">Red Cards</p>
              <Bars3BottomRightIcon className="h-5 w-5" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((player, index) => (
          <tr key={index} className="even:bg-gray-200 text-center">
            <td className="border-r border-gray-300 p-2">{player.name}</td>
            <td className="p-2">{player.nation}</td>
            <td className="p-2">{player.team}</td>
            <td className="p-2">{player.position}</td>
            <td className="border-r border-gray-300 p-2">{player.age}</td>
            <td className="p-2">{player.matchesPlayed}</td>
            <td className="p-2">{player.goals}</td>
            <td className="p-2">{player.assists}</td>
            <td className="border-r border-gray-300 p-2">
              {Math.round((player.goals / player.matchesPlayed) * 100) / 100}
            </td>
            <td className="p-2">{player.yellowCards}</td>
            <td className="p-2">{player.redCards}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StatsTable;
