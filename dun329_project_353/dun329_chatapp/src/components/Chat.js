// import { useState, useEffect, useRef } from "react";
// import { database, ref, push, onValue } from "../firebase";

// function Chat({ name }) {
//   const [inpMessage, setIptMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const input = useRef();

//   useEffect(() => {
//     onValue(ref(database, "message"), (data) => {
//       let getMsg = [];
//       data.forEach((d) => {
//         getMsg.push(d.val());
//       });
//       setMessages(getMsg);
//     });
//   }, []);

//   const handleSendMessage = () => {
//     push(ref(database, "message"), {
//       name: name,
//       message: inpMessage,
//     });
//     setIptMessage("");
//     input.current.focus();
//   };

//   const chatStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     marginTop: "20px",
//     border: "2px",

//   };

//   const inputStyle = {
//     margin: "10px",
//     padding: "10px",
//     borderRadius: "50px",
//     border: "1px solid black",
//     width: "300px",
//     color: "black"
//   };
  

//   const buttonStyle = {
//     margin: "10px",
//     padding: "10px",
//     borderRadius: "5px",
//     border: "2px",
//     backgroundColor: "#4CAF50",
//     color: "white",
//     width: "100px",
//   };

//   const messageListStyle = {
//     listStyle: "none",
//     margin: "20px",
//     padding: "0",
//     textAlign: "left",
//     width: "300px",
//   };

//   const messageStyle = {
//     display: "block",
//     marginBottom: "10px",
//   };

//   const nameStyle = {
//     fontWeight: "bold",
//     marginRight: "5px",
//   };

//   return (
//     <div style={chatStyle}>
//       <h1>Hello {name}</h1>
//       <input
//         type="text"
//         value={inpMessage}
//         onChange={(e) => {
//           setIptMessage(e.target.value);
//         }}
//         ref={input}
//         style={inputStyle}
//       />
//       <button onClick={handleSendMessage} style={buttonStyle}>
//         Send
//       </button>
//       <ul style={messageListStyle}>
//         {messages.map((msg, index) => {
//           return (
//             <li key={index} style={messageStyle}>
//               <span style={nameStyle}>{msg.name}:</span>
//               <span>{msg.message}</span>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default Chat;
