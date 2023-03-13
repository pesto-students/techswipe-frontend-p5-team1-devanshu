/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import LeftArrow from "../assets/arrow-left.svg";
import classNames from "classNames";
import { formatDistanceToNowStrict, parseISO } from "date-fns";
import { format } from "date-fns";

import { groupMessagesByDay } from "../utils";
// import { parse } from "query-string/base";

export const MessagesList = (props) => {
  const { socket, openConversation, setOpenConversation } = props;
  const conversationId = openConversation["_id"];
  const toUserId = openConversation.toUserId;

  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleMessage = (response) => {
      if (response.toUserId === toUserId) {
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

  return (
    <div>
      <div className="flex bg-blue-200 text-white">
        <button onClick={() => setOpenConversation({})}>
          <img src={LeftArrow} alt="" className="h-8 w-8" />
        </button>
        <div>{toUserId}</div>
      </div>
      <div className="flex flex-col overflow-scroll h-[500px] p-2">
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
      </div>
      <form onSubmit={(e) => handleMessage(e)} className="flex p-2">
        <input
          className="border-2 w-full mx-2"
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};
