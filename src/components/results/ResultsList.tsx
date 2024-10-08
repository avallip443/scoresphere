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
  const isNationData = dataType == "Nation";
  const isTeamData = dataType == "Club";
  console.log(dataType, isTeamData);

  return (
    <div className="w-11/12 flex flex-wrap items-center justify-center gap-x-4 gap-y-4 mt-4">
      {data.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          image={
            isNationData
              ? `https://flagcdn.com/w320/${item.code?.toLowerCase()}.png`
              : item.image || "https://via.placeholder.com/150" // fallback to placeholder if image is undefined
          }
          backgroundSize={isTeamData ? "contain" : "cover"}
          dataType={dataType}
        />
      ))}
    </div>
  );
};

export default ResultsList;
