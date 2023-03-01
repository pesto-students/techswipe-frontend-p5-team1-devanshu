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
      <div
        className="md:flex md:flex-row md:h-screen"
        aria-label="sidebar-header"
      >
        <div className="flex flex-col md:w-1/3 border-r-2 border-slate-400">
          <Header />
          <Sidebar />
        </div>
        <div className="flex  flex-col justify-center items-center w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <Settings />
          </div>
        </div>
      </div>
      <MobileFooter />
    </div>
  );
};
