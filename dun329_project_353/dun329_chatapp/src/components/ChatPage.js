import { useState, useEffect } from "react";
import { database, ref, push, onValue, update } from "../firebase";

function ChatPage() {
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState("");
  const [messages, setMessages] = useState([]);
  const [inpMessage, setIptMessage] = useState("");
  const [replies, setReplies] = useState({});
  const [likeCounts, setLikeCounts] = useState({});

  useEffect(() => {
    // Fetch channels from Firebase
    onValue(ref(database, "channels"), (data) => {
      let getChannels = [];
      data.forEach((d) => {
        getChannels.push(d.val());
      });
      setChannels(getChannels);
    });

    // Fetch messages for the selected channel from Firebase
    if (selectedChannel !== "") {
      onValue(ref(database, `likes/${selectedChannel}`), (data) => {
        setLikeCounts(data.val() || {});
      });
      onValue(ref(database, `messages/${selectedChannel}`), (data) => {
        let getMessages = [];
        let getReplies = {};
        data.forEach((d) => {
          let message = d.val();
          let messageId = d.key;
          getMessages.push({ ...message, messageId });
          if (message.replies) {
            getReplies[messageId] = message.replies;
          }
        });
        setMessages(getMessages);
        setReplies(getReplies);
      });
    }
  }, [selectedChannel]);

  const handleCreateChannel = () => {
    const channelName = prompt("Enter channel name:");
    if (channelName !== "") {
      push(ref(database, "channels"), channelName);
    }
  };

  const handleSelectChannel = (channel) => {
    setSelectedChannel(channel);
  };

  const handleSendMessage = () => {
    push(ref(database, `messages/${selectedChannel}`), {
      message: inpMessage,
      replies: {},
    });
    setIptMessage("");
  };

  const handleRateMessage = (messageId) => () => {
    // Update the like count in the Firebase database
    update(ref(database, `likes/${selectedChannel}`), {
      [messageId]: (likeCounts[messageId] || 0) + 1,
    });

    // Update the like count in the component state
    setLikeCounts({
      ...likeCounts,
      [messageId]: (likeCounts[messageId] || 0) + 1,
    });
  };
  const handleReplyPrompt = (messageId) => {
    const reply = prompt("Enter your reply:");
    if (reply) {
      setReplies((prevReplies) => ({
        ...prevReplies,
        [messageId]: [...(prevReplies[messageId] || []), reply],
      }));
    }
  };

  return (
    <div>
      <div>
        <h1>Channels</h1>
        <ul>
          {channels.map((channel, index) => (
            <li
              key={index}
              onClick={() => handleSelectChannel(channel)}
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                color: "#13C2C2",
              }}
            >
              {channel}
            </li>
          ))}
        </ul>
        <button
          onClick={handleCreateChannel}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "5px",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Create new channel
        </button>
      </div>
      {selectedChannel !== "" && (
        <div>
          <h1>Messages for {selectedChannel}</h1>
          <ul>
            {messages.map((msg, index) => (
              <li key={msg.messageId}>
                {msg.message}
                <button
                  onClick={handleRateMessage(msg.messageId)}
                  style={{
                    backgroundColor: "#28a745",
                    color: "#fff",
                    borderRadius: "5px",
                    padding: "5px",
                    border: "none",
                    marginLeft: "40px",
                    cursor: "pointer",
                  }}
                >
                  Like
                </button>
                <>Likes: {likeCounts[msg.messageId] || 0}</>
                <button
                  onClick={() => handleReplyPrompt(msg.messageId)}
                  style={{
                    backgroundColor: "#007bff",
                    color: "#fff",
                    borderRadius: "5px",
                    padding: "5px",
                    border: "none",
                    marginLeft: "100px",
                    cursor: "pointer",
                  }}
                >
                  Reply
                </button>
              </li>
            ))}
          </ul>
          <form onSubmit={(e) => e.preventDefault()}>
            <label>
              Message:
              <input
                type="text"
                value={inpMessage}
                onChange={(e) => setIptMessage(e.target.value)}
                style={{
                  marginLeft: "10px",
                  padding: "5px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </label>
            <button
              onClick={handleSendMessage}
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                borderRadius: "5px",
                padding: "10px",
                border: "none",
                cursor: "pointer",
                marginLeft: "10px",
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
export default ChatPage;
