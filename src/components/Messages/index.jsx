import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MessagesList } from "../MessagesList";
import { NoMessages } from "../NoMessages";
//
import { getUserConversations, getUserInfo } from "../../utils/api";
import { transformConversations } from "../../utils";

export const MessagesComponent = ({ socket }) => {
  // const [conversations, setConversations] = useState([]);
  const [openConversation, setOpenConversation] = useState({});

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUserInfo,
  });

  const { data: conversationsData } = useQuery({
    queryKey: ["conversations"],
    queryFn: getUserConversations,
    onSuccess: () => {
      // setConversations(data);
    },
  });

  const isConversationOpen = Object.keys(openConversation).length !== 0;
  if (!conversationsData) return null;
  const { data: conversations } = conversationsData;

  if (conversations.length === 0) return <NoMessages />;

  const transformedConversations = conversations.map((conversation) =>
    transformConversations(conversation, user)
  );

  return (
    <div className="w-full">
      {/* <NoMessages /> */}
      {isConversationOpen ? (
        <div className="h-full my-2 w-full">
          <MessagesList
            user={user}
            socket={socket}
            openConversation={openConversation}
            setOpenConversation={setOpenConversation}
          />
        </div>
      ) : (
        <div className="w-full">
          {transformedConversations.map((conversation, index) => (
            <div
              key={index}
              className="w-full h-20 hover:bg-blue-300 flex items-center px-5 py-2"
              onClick={() => setOpenConversation(conversation)}
            >
              <img
                src={conversation.toUser?.profilePhoto}
                className="h-10 w-10 rounded-full mr-2"
              />
              <div>
                <h1>{conversation.toUser?.name}</h1>
                <h1>{conversation.toUserId}</h1>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
