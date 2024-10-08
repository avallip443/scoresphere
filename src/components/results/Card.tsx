import React from "react";
import { useNavigate  } from "react-router-dom";

interface CardProps {
  name: string;
  image: string;
  backgroundSize: "cover" | "contain";
  dataType: string;
}

const Card: React.FC<CardProps> = ({
  name,
  image,
  backgroundSize,
  dataType,
}) => {
  const navigate = useNavigate ();

  const handleClick = () => {
    const encodedName = encodeURIComponent(name);

    switch (dataType) {
      case "Position":
        navigate(`/position/${encodedName}`);
        break;
      case "Club":
        navigate(`/club/${encodedName}`);
        break;
      case "Nation":
        navigate(`/nation/${encodedName}`);
        break;
      default:
        return;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="w-48 h-48 bg-gray-200 rounded-2xl cursor-pointer hover:bg-accent transition-all duration-300"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: backgroundSize,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        onClick={handleClick}
      ></div>
      <h1 className="text-md text-secondary ">{name}</h1>
    </div>
  );
};

export default Card;
