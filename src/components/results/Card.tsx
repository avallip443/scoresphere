import React from "react";

interface CardProps {
  itemLabel: string;
}

const Card: React.FC<CardProps> = ({ itemLabel }) => {
  return (
    <div className="w-48 h-48 flex items-center justify-center bg-gray-200 rounded-2xl cursor-pointer hover:bg-accent transition-all duration-300">
      <h1 className="text-2xl text-secondary">{itemLabel}</h1>
    </div>
  );
};

export default Card;
