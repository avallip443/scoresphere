import React from "react";

interface SearchTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SearchTabs: React.FC<SearchTabsProps> = ({ activeTab, setActiveTab }) => {
  //const [activeTab, setActiveTab] = useState<string>("Player");
  const tabs = ["Player", "Position", "Club", "Country"];

  return (
    <div className="w-1/2 flex">
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`w-full text-center p-2 cursor-pointer ${
            activeTab === tab
              ? "bg-accent text-white"
              : "bg-secondary text-gray-300"
          }`}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default SearchTabs;
