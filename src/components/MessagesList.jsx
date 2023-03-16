/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { parseISO } from "date-fns";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
//
import Send from "../assets/send-icon.svg";
import LeftArrow from "../assets/arrow-left.svg";
import { getUsers, groupMessagesByDay } from "../utils";
import { getUserFromId } from "../utils/api";

export const MessagesList = (props) => {
  const navigate = useNavigate();

  const { user, socket, openConversation, setOpenConversation } = props;

  const { toUser } = getUsers(openConversation, user);

  const conversationId = openConversation["_id"];
  const name = toUser.name;
  const image = toUser.profilePhoto;
  const toUserId = toUser.toUserId;

  const { data, isLoading } = useQuery({
    queryKey: ["matchedUser"],
    queryFn: async () => getUserFromId(toUserId),
  });

  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  let [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    const handleMessage = (response) => {
      if (response.toUserId === toUserId || response.fromUserId === toUserId) {
        setMessages((messages) => [...messages, response]);
      }
    };

    socket.emit("message", {
      type: "Get Messages",
      conversationId,
    });

    socket.on("getMessages", (response) => {
      setMessages(response);
    });

    socket.on("newMessage", handleMessage);

    return () => {
      socket.off("newMessage", handleMessage);
    };
  }, []);

  useEffect(() => {
    containerRef.current?.scrollIntoView();
  }, [messages]);

  const handleMessage = (e) => {
    e.preventDefault();
    if (!newMessage) return;
    socket.emit("message", {
      type: "Post Message",
      conversationId,
      toUserId,
      text: newMessage,
    });
    setNewMessage("");
  };
  const messagesGroup = groupMessagesByDay(messages);

  console.log({ openConversation });
  return (
    <div className="mt-4">
      <div className="flex bg-blue-200 text-white w-full items-center p-4">
        <button onClick={() => setOpenConversation({})}>
          <img src={LeftArrow} alt="" className="h-6 w-8" />
        </button>
        <div
          className="flex items-center"
          onClick={() => navigate(`/profile/${toUserId}`)}
        >
          <img src={image} alt="" className="h-8 w-8 rounded-full" />
          <div className="ml-2 text-black">{name}</div>
        </div>
      </div>
      <div
        className="flex flex-col overflow-scroll h-[500px] px-2"
        // ref={containerRef}
      >
        {Object.keys(messagesGroup).map((group, index) => (
          <div className="flex flex-col" key={index}>
            <div className="text-center">{group}</div>
            {messagesGroup[group].map((msg, index) => (
              <div
                key={index}
                className={classNames(
                  ` ${
                    msg.fromUserId === props.user["_id"]
                      ? "self-end "
                      : "self-start"
                  } `,
                  "my-2"
                )}
              >
                <div
                  className={classNames(
                    ` ${
                      msg.fromUserId === props.user["_id"]
                        ? "bg-blue-300"
                        : "bg-slate-300"
                    } `,
                    "p-3 rounded-md "
                  )}
                >
                  {msg.text}
                </div>
                <div
                  className={classNames(
                    ` ${
                      msg.fromUserId === props.user["_id"]
                        ? "text-right"
                        : "tex-left"
                    } `
                  )}
                >
                  {format(parseISO(msg.timeStamp), "hh:mm")}
                </div>
              </div>
            ))}
          </div>
        ))}
        <div ref={containerRef} className="h-1" id="messagesEnd" />
      </div>
      <form onSubmit={(e) => handleMessage(e)} className="flex p-2">
        <input
          className="border-2 w-full mx-2 rounded-md"
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit" className="p-2 bg-blue-400 rounded-md">
          <img src={Send} alt="send icon" className="h-6 w-12" />
        </button>
      </form>
    </div>
  );
};
