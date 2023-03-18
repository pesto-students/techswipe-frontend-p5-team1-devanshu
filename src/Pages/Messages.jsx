import React from "react";
//
import { TinderCardsList } from "../components/Cards";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { MobileFooter } from "../components/MobileFooter";
import { MessagesComponent } from "../components/Messages";

export const Messages = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full h-screen">
        <div className="md:w-1/3 md:h-full border-r-2 border-slate-400">
          <Header />
          <div className="hidden md:block">
            <Sidebar />
          </div>
        </div>
        <div className="flex flex-col items-center w-full h-full overflow-scroll">
          <div className="block md:hidden">
            <MessagesComponent />
          </div>
          <div className="hidden md:block">
            <TinderCardsList />
          </div>
        </div>
        <MobileFooter />
      </div>
    </div>
  );
};
