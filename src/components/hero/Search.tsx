import React from "react";
import SearchBar from "./SearchBar";
import SearchTabs from "./SearchTabs";

interface SearchProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  query: string;
  setQuery: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({
  activeTab,
  setActiveTab,
  query,
  setQuery,
}) => {
  return (
    <div className="w-full bg-primary flex flex-col items-center justify-center mt-12">
      <SearchTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchBar query={query} setQuery={setQuery} />
    </div>
  );
};

export default Search;
