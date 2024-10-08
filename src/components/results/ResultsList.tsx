import React from "react";
import Card from "./Card";

interface ResultsListProps {
  data: {
    id: number;
    name: string;
    image?: string; // in case PositionData doesn't have img
    code?: string;
  }[];
  dataType: string;
}

const ResultsList: React.FC<ResultsListProps> = ({
  data,
  dataType,
}) => {
  const isNationData = dataType == "nation";
  const isTeamData = dataType == "team";

  return (
    <div className="w-11/12 flex flex-wrap items-center justify-center gap-x-4 gap-y-4 mt-4">
      {data.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          image={
            isNationData
              ? `https://flagcdn.com/w320/${item.code?.toLowerCase()}.png`
              : item.image || "https://via.placeholder.com/150" // Fallback to placeholder if image is undefined
          }
          backgroundSize={isTeamData ? "contain" : "cover"}
        />
      ))}
    </div>
  );
};

export default ResultsList;
