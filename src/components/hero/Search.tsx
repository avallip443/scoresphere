import React from "react";
import SearchBar from "./SearchBar";
import SearchTabs from "./SearchTabs";

interface SearchProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Search: React.FC<SearchProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-full bg-primary flex flex-col items-center justify-center mt-12">
      <SearchTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchBar />
    </div>
  );
};

export default Search;
