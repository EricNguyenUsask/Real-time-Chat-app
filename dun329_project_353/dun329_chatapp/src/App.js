import { Routes, Route, Link } from "react-router-dom";

import HomePage from "./components/Home";
import LogPage from "./components/LogPage";
import ChatPage from "./components/ChatPage";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="App">
      <nav style={{ backgroundColor: "#333", padding: "10px" }}>
        <ul style={{ display: "flex", justifyContent: "space-between", listStyle: "none", margin: 0, padding: 0 }}>
          <li>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
          </li>
          <li>
            <Link to="/log" style={{ color: "white", textDecoration: "none" }}>Log Page</Link>
          </li>
          <li>
            <Link to="/chat" style={{ color: "white", textDecoration: "none" }}>Chat</Link>
          </li>
          <li>
            <Link to="/search" style={{ color: "white", textDecoration: "none" }}>Search</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/log" element={<LogPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
