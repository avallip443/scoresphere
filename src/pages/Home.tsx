import React, { useState } from "react";
import Hero from "../components/hero/Hero";
import Results from "../components/results/Results";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Player");

  return (
    <>
      <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
      <Results activeTab={activeTab} />
    </>
  );
};

export default Home;
