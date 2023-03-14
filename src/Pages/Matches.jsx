/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { TinderCardsList } from "../components/Cards";
import { Header } from "../components/Header";
import { MatchesComponent } from "../components/Matches";
import { MobileFooter } from "../components/MobileFooter";
import { Settings } from "../components/settings";
import { Sidebar } from "../components/Sidebar";
import { getUserMatchedProfiles } from "../utils/api";

export const MatchCard = ({ data }) => {
  return <div>{data}</div>;
};

export const Matches = ({ socket }) => {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["matchedProfiles"],
  //   queryFn: getUserMatchedProfiles,
  // });

  // if (isLoading) return <div>Loading....</div>;

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="md:w-1/3 md:h-full border-r-2 border-slate-400">
        <Header />
        <div className="hidden md:block">
          <Sidebar socket={socket} />
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
