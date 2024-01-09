import "./App.css";
import { useState } from "react";
import Home from "./pages/home";
import Chat from "./pages/chat";
import Navbar from "./pages/chat/navbar";
import Settings from "./pages/settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import io from "socket.io-client";

const socket = io.connect("http://localhost:4000");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                username={username}
                setUsername={setUsername}
                room={room}
                setRoom={setRoom}
                socket={socket}
              />
            }
          />
          <Route
            path="/chat"
            element={
              <div className="container">
                <Navbar
                  className="navbar"
                  setRoom={setRoom}
                  socket={socket}
                  username={username}
                  room={room}
                />
                <Chat
                  className="chat"
                  username={username}
                  room={room}
                  socket={socket}
                />
              </div>
            }
          />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
