import React from "react";
import ResultsList from "./ResultsList";
import StatsTable from "../stats/StatsTable";
import TeamData from "../../utils/teams.json";
import PositionData from '../../utils/positions.json'
import CountryData from '../../utils/countries.json'

interface ResultsProps {
  activeTab: string;
}

const Results: React.FC<ResultsProps> = ({ activeTab }) => {
  let data: { id: number; name: string; image: string }[] = [];
  let isTeamData = false;
  let isCountryData = false;

  switch (activeTab) {
    case "Player":
    case "Club":
      data = TeamData;
      isTeamData = true;
      break;
    case "Position":
      data = PositionData;
      break;
    case "Country":
      data = CountryData;
      isCountryData = true;
      break;
    default:
      data = [];
      return;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center mb-6">
      <h1 className="text-2xl mt-6 text-secondary">Results</h1>
      {activeTab === "Player" ? (
        <StatsTable />
      ) : (
        <ResultsList
          data={data}
          isTeamData={isTeamData}
          isCountryData={isCountryData}
        />
      )}
    </div>
  );
};

export default Results;
