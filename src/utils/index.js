export function groupMessagesByDay(messages) {
  const groupedMessages = {};
  for (let i = 0; i < messages.length; i++) {
    const message = messages[i];
    // Extract the date from the timestamp
    const date = new Date(message.timeStamp).toISOString().slice(0, 10);
    // Check if the date is already a key in the object
    if (date in groupedMessages) {
      groupedMessages[date].push(message);
    } else {
      groupedMessages[date] = [message];
    }
  }
  return groupedMessages;
}

export const getUsers = (openConversation, user) => {
  if (openConversation.toUser.toUserId === user["_id"]) {
    return {
      toUser: {
        name: openConversation.fromUser.name,
        profilePhoto: openConversation.fromUser.profilePhoto,
        toUserId: openConversation.fromUser.fromUserId,
      },
      fromUser: {
        name: openConversation.toUser.name,
        profilePhoto: openConversation.toUser.profilePhoto,
        toUserId: openConversation.toUser.toUserId,
      },
    };
  } else {
    return {
      toUser: openConversation.toUser,
      fromUser: openConversation.fromUser,
    };
  }
};

export const transformConversations = (conversation, user) => {
  if (conversation.toUser.toUserId === user["_id"]) {
    return {
      ...conversation,
      toUser: {
        name: conversation.fromUser.name,
        profilePhoto: conversation.fromUser.profilePhoto,
        toUserId: conversation.fromUser.fromUserId,
      },
      fromUser: {
        name: conversation.toUser.name,
        profilePhoto: conversation.toUser.profilePhoto,
        toUserId: conversation.toUser.toUserId,
      },
    };
  } else {
    return {
      ...conversation,
      toUser: conversation.toUser,
      fromUser: conversation.fromUser,
    };
  }
};
