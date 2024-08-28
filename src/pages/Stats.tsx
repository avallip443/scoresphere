import React from "react";
import StatsTable from "../components/Stats/StatsTable";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const Stats: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-12">
      <div className="w-11/12 flex justify-start">
        <button className="cursor-pointer" onClick={handleBackClick}>
          {" "}
          <ArrowLeftIcon className="h-8 w-8" />
        </button>
      </div>
      <h1 className="text-3xl font-bold">Stats</h1>
      <StatsTable />
    </div>
  );
};

export default Stats;
