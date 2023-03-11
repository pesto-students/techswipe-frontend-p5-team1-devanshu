/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

export const MessagesList = (props) => {
  const { socket, openConversation, setOpenConversation } = props;

  const conversationId = openConversation.conversationId;
  const toUserId = openConversation.toUser.id;

  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit("message", {
      type: "Get Messages",
      conversationId,
    });

    socket.on("getMessages", (response) => {
      setMessages(response);
    });

    socket.on("newMessage", (response) => {
      console.log(messages);
      setMessages((messages) => [...messages, response]);
    });

    return () => {};
  }, []);

  const handleMessage = (e) => {
    e.preventDefault();

    socket.emit("message", {
      type: "Post Message",
      conversationId,
      toUserId,
      text: newMessage,
    });
    setNewMessage("");
  };

  return (
    <div>
      <button onClick={() => setOpenConversation({})}>Back</button>
      <div>Messages component</div>
      {messages.map((msg) => (
        <div key={msg["_id"]}> {msg.text}</div>
      ))}
      <form onSubmit={(e) => handleMessage(e)}>
        <input
          className="border-2 w-full mx-2"
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
