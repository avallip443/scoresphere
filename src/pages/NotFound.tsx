import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-12">
      <h1 className="text-3xl text-center font-bold mt-12">404 - Not Found</h1>
      <p className="text-center">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
