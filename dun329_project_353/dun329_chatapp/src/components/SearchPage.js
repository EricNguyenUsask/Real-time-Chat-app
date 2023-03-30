import { useState, useEffect } from "react";
import { database, ref, onValue } from "../firebase";

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);

  useEffect(() => {
    const messagesRef = ref(database, "messages");
    onValue(messagesRef, (snapshot) => {
      const allMessages = [];
      snapshot.forEach((channelSnapshot) => {
        const channel = channelSnapshot.key;
        channelSnapshot.forEach((messageSnapshot) => {
          const message = messageSnapshot.val();
          const messageId = messageSnapshot.key;
          allMessages.push({ ...message, channel, messageId });
        });
      });
      setMessages(allMessages);
      setFilteredMessages(allMessages);
    });
  }, []);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    filterMessages(event.target.value);
  };

  const filterMessages = (searchTerm) => {
    const filteredMessages = messages.filter((message) =>
      message.message.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMessages(filteredMessages);
  };

  const sortMessagesByLikes = () => {
    const sortedMessages = [...filteredMessages].sort(
      (a, b) => b.likes - a.likes
    );
    setFilteredMessages(sortedMessages);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Search Messages</h1>
      <input
        type="text"
        placeholder="Search messages..."
        value={searchTerm}
        onChange={handleSearchTermChange}
        style={{
          padding: "5px",
          margin: "10px 0",
          fontSize: "16px",
          width: "100%",
        }}
      />
      <button
        onClick={sortMessagesByLikes}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          borderRadius: "5px",
          padding: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Sort by Likes
      </button>
      {filteredMessages.map((message) => (
        <div key={message.messageId} style={{ marginBottom: "10px" }}>
          <h3>{message.channel}</h3>
          <p>{message.message}</p>
          {/* <p style={{ fontStyle: "italic" }}>Sent by: {message.sender}</p> */}
          <p style={{ fontWeight: "bold" }}>Likes: {message.likes}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchPage;
