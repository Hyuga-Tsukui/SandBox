import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "@tanstack/react-location";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
