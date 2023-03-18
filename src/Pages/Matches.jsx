import React from "react";
//
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { TinderCardsList } from "../components/Cards";
import { MatchesComponent } from "../components/Matches";
import { MobileFooter } from "../components/MobileFooter";

export const Matches = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="md:w-1/3 md:h-full border-r-2 border-slate-400">
        <Header />
        <div className="hidden md:block">
          <Sidebar />
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full overflow-scroll">
        <div className="block md:hidden">
          <MatchesComponent />
        </div>
        <div className="hidden md:block">
          <TinderCardsList />
        </div>
      </div>
      <MobileFooter />
    </div>
  );
};
