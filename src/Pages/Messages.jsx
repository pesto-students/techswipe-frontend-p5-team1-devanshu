import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Header } from "../components/Header";
import { MessagesList } from "../components/MessagesList";
import { MobileFooter } from "../components/MobileFooter";
import { Sidebar } from "../components/Sidebar";
import { getUserConversations } from "../utils/api";
// socket.

export const Messages = ({ socket }) => {
  const [conversations, setConversations] = useState([]);
  const [openConversation, setOpenConversation] = useState({});

  const { data } = useQuery({
    queryKey: ["conversations"],
    queryFn: getUserConversations,
    onSuccess: (data) => {
      setConversations(data);
    },
  });

  console.log({ data });

  const isConversationOpen = Object.keys(openConversation).length !== 0;

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
          {isConversationOpen ? (
            <div className="border-2 border-black h-full my-2 w-1/2">
              <MessagesList
                socket={socket}
                openConversation={openConversation}
                setOpenConversation={setOpenConversation}
              />
            </div>
          ) : (
            <div className="border-2 border-black w-1/2">
              {conversations.map((conversation, index) => (
                <div
                  key={index}
                  className="w-full h-20 hover:bg-blue-300 flex items-center px-5 py-2"
                  onClick={() => setOpenConversation(conversation)}
                >
                  <img
                    src={conversation.toUser?.image}
                    className="h-10 w-10 rounded-full mr-2"
                  />
                  <div>
                    <h1>{conversation.toUser?.username}</h1>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <MobileFooter />
      </div>
    </div>
  );
};
