import React from "react";
import ResultsList from "./ResultsList";
import StatsTable from "../stats/StatsTable";
import TeamData from "../../utils/teams.json";
import PositionData from '../../utils/positions.json'
import NationData from '../../utils/nations.json'

interface ResultsProps {
  activeTab: string;
  query: string;
}

const Results: React.FC<ResultsProps> = ({ activeTab, query }) => {
  let data: { id: number; name: string; image?: string; code?: string }[] = [];
  const dataType = activeTab;

  switch (activeTab) {
    case "Player":
    case "Club":
      data = TeamData;
      break;
    case "Position":
      data = PositionData;
      break;
    case "Nation":
      data = NationData
      break;
    default:
      data = [];
      return;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center mb-6">
      <h1 className="text-2xl mt-6 text-secondary">Results</h1>
      {activeTab === "Player" ? (
        <StatsTable query={query} />
      ) : (
        <ResultsList
          data={data}
          dataType={dataType}
          query={query}
        />
      )}
    </div>
  );
};

export default Results;
