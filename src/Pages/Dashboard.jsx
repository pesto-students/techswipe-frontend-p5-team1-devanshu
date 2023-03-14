import React from "react";
//
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { MobileFooter } from "../components/MobileFooter";
import { TinderCardsList } from "../components/Cards";

export const Dashboard = ({ socket }) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="md:w-1/3 md:h-full border-r-2 border-slate-400">
        <Header />
        <div className="hidden md:block">
          <Sidebar socket={socket} />
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full overflow-scroll">
        <TinderCardsList />
      </div>

      <MobileFooter />
    </div>
  );
};
