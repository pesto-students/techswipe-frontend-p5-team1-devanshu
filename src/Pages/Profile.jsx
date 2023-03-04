import React, { useEffect } from "react";
import queryString from "query-string";
//
import { Settings } from "./Settings";
// import { MobileFooter } from "../components/MobileFooter";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Header } from "../components/Header";
import { MobileFooter } from "../components/MobileFooter";
import { Sidebar } from "../components/Sidebar";

export const Profile = () => {
  const { token } = queryString.parse(window.location.search);

  // eslint-disable-next-line no-unused-vars
  const [_, setToken] = useLocalStorage("token", "");

  useEffect(() => {
    if (token) {
      setToken(token);
    }
  }, [token]);

  return (
    <div className="flex flex-col justify-evenly">
      <div className="md:flex md:flex-row" aria-label="sidebar-header">
        <div className="flex flex-col md:w-1/3 border-r-2 border-slate-400">
          <Header />
          <div className="hidden md:block">
            <Sidebar />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center w-full md:max-w-md max-w-xs">
            <Settings />
          </div>
        </div>
      </div>
      <MobileFooter />
    </div>
  );
};
