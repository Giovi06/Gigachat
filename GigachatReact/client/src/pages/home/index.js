import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Home = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate();
  const joinRoom = () => {
    if (room !== "" && username !== "") {
      socket.emit("join_room", { username, room });
    }
    navigate("/chat", { replace: true });
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`<>DevRooms</>`}</h1>
        <input
          className={styles.input}
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        />

        <select
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option>-- Select Room --</option>
          <option value="Chat Room 1">Chat Room 1</option>
          <option value="Chat Room 2">Chat Room 2</option>
          <option value="Chat Room 3">Chat Room 3</option>
          <option value="Chat Room 4">Chat Room 4</option>
        </select>

        <button
          className="btn btn-secondary"
          style={{ width: "100%" }}
          onClick={joinRoom}
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Home;
