import React, { useState } from "react";
import Hero from "../components/hero/Hero";
import Results from "../components/results/Results";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Player");
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <Hero activeTab={activeTab} setActiveTab={setActiveTab} query={query} setQuery={setQuery} />
      <Results activeTab={activeTab} query={query} />
    </>
  );
};

export default Home;
