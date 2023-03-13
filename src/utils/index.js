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
