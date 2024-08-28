import React from "react";
import ResultsList from "./ResultsList";
import StatsTable from "../Stats/StatsTable";

interface ResultsProps {
  activeTab: string;
}

const Results: React.FC<ResultsProps> = ({ activeTab }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center mb-6">
      <h1 className="text-2xl mt-6 text-secondary">Results</h1>
      {activeTab === "Player" ? <StatsTable /> : <ResultsList/>}
    </div>
  );
};

export default Results;
