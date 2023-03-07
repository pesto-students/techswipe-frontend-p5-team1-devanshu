import React from "react";
// import { useNavigate } from "react-router-dom";

import { users } from "../utils/data";
import { ImageCard } from "../components/ImageCard";
import { MobileFooter } from "../components/MobileFooter";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="md:w-1/3 md:h-full border-r-2 border-slate-400">
        <Header />
        <div className="hidden md:block">
          <Sidebar />
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full overflow-scroll">
        {users.slice(0, 1).map((character, index) => (
          <ImageCard character={character} key={index} />
        ))}
      </div>
      <MobileFooter />
    </div>
  );
};
