import "./App.css";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { border: "1px solid", borderRadius: "4px" } : undefined
          }
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) =>
            isActive ? { border: "1px solid", borderRadius: "4px" } : undefined
          }
        >
          About
        </NavLink>
        <NavLink
          to="posts"
          style={({ isActive }) =>
            isActive ? { border: "1px solid", borderRadius: "4px" } : undefined
          }
        >
          Posts
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
