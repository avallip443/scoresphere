import React from "react";

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="w-4/5 md:w-2/3 lg:w-1/2 flex items-center border border-gray-300 rounded-bl-lg rounded-br-lg overflow-hidden shadow-sm">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="w-full p-2 pl-6 outline-none"
      />
      <button className="p-2 bg-primary text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.6-3.65A7.5 7.5 0 1 0 4.5 7.5a7.5 7.5 0 0 0 14.3 5.25l4.2 4.2z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
