import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import "./styles/tailwind.css";
import Stats from "./pages/Stats";
import PositionStats from "./components/stats/PositionStats";
import ClubStats from "./components/stats/ClubStats";
import NationStats from "./components/stats/NationStats";


const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-secondary text-white py-4 px-10">
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/position/:name" element={<PositionStats />} />
            <Route path="/club/:name" element={<ClubStats />} />
            <Route path="/nation/:name" element={<NationStats />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          © 2024 ScoreSphere
        </footer>
      </div>
    </Router>
  );
};

export default App;
