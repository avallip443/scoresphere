import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="w-full flex items-start justify-center">
      <div className="w-1/2 flex flex-col items-center justify-center mt-4 mb-16">
        <h1 className="text-2xl font-bold mt-8 mb-4">About</h1>
        <p className="mb-4">
          Welcome to ScoreSphere! This application is meant for easily finding
          and comparing stats within the Spanish LaLiga, so whether you want to
          check player stats, team performance, or nation-based ranking, this
          website has got you covered.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Features</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Easy Search:</strong> Find players, teams, and nations
            quickly.
          </li>
          <li>
            <strong>Detailed Stats:</strong> From goals to assists and more.
          </li>
          <li>
            <strong>Performance Insights:</strong> Compare player performance
            across matches.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Tools</h2>
        <p>
          This application was using React, TypeScript, Tailwind CSS, Spring,
          and PostgreSQL. The data was collected using a Python web scraping
          script.
        </p>
        <p className="mt-10">
          The source code can be viewed{" "}
          <a
            href="https://github.com/avallip443/scoresphere"
            className="underline text-blue-600 hover:text-blue-800"
          >
            here
          </a>
          !
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
