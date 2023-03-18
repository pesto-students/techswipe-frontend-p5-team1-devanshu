import React, { useEffect, createContext, useState } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const SocketProvider = (props) => {
  const [socket, setSocket] = useState();
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

  const baseURL = import.meta.env.VITE_BACKEND_API;
  //   const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      const socket = io(baseURL, {
        auth: {
          token,
        },
      });

      setSocket(socket);
    }
  }, [token]);

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};
