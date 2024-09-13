import React from "react";

interface CardProps {
  name: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="w-48 h-48 bg-gray-200 rounded-2xl cursor-pointer hover:bg-accent transition-all duration-300"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >xxxx</div>
      <h1 className="text-md text-secondary ">{name}</h1>
    </div>
  );
};

export default Card;
