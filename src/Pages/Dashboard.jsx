import React, { useEffect } from "react";
import queryString from "query-string";
// import { useNavigate } from "react-router-dom";

import { users } from "../utils/data";
import { ImageCard } from "../components/ImageCard";
import { MobileFooter } from "../components/MobileFooter";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Header } from "../components/Header";

export const Dashboard = () => {
  const { token } = queryString.parse(window.location.search);
  const [localToken, setToken] = useLocalStorage("token", "");
  useEffect(() => {
    if (token) {
      setToken(token);
    }
  }, [token]);

  console.log({ token, localToken });
  return (
    <div className="flex flex-col justify-evenly">
      <div
        className="md:flex md:flex-row md:h-screen"
        aria-label="sidebar-header"
      >
        <div className="flex flex-col md:w-1/3 bg-green-400">
          <Header />
          <div></div>
        </div>
        <div className="flex  flex-col justify-center items-center w-full bg-red-500">
          <div className="mt-10 flex flex-col items-center justify-center w-full">
            {users.slice(0, 1).map((character, index) => (
              <ImageCard character={character} key={index} />
            ))}
          </div>
        </div>
      </div>
      <MobileFooter />
    </div>
  );
};
