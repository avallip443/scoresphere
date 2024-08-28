import React from "react";
import Search from "./Search";

interface HeroProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Hero: React.FC<HeroProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-full h-96 bg-primary flex items-start justify-center">
      <div className="w-full flex flex-col items-center justify-center mt-24">
        <h1 className="text-5xl text-white">ScoreSphere</h1>
        <Search activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default Hero;
