import React from "react";
import Card from "./Card";

const ResultsList: React.FC = () => {
  const stringList: string[] = ["1", "2", "3", "4", '5', '6', '7', '8'];

  return (
    <div className="w-11/12 flex flex-wrap items-center justify-center gap-x-4 gap-y-4 mt-4">
      {stringList.map((item, index) => (
        <Card key={index} itemLabel={item} />
      ))}
    </div>
  );
};

export default ResultsList;
