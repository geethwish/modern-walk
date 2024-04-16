import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rounded-full h-20 w-20 bg-[#2bd9af] animate-ping"></div>
    </div>
  );
};

export default Loader;
