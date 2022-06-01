import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Home } from "./RouterComponents/Home";
import { Kitchen } from "./RouterComponents/Kitchen";
import { Login } from "./RouterComponents/Login";
import { Register } from "./RouterComponents/Register";

export function Navigation() {
  return (
    <Router>
      <div className="Navigation">
        {/* <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/register">About</Link>
            </li>
            <li>
              <Link to="/login">Users</Link>
            </li>
          </ul>
        </nav>  */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/kitchen" element={<Kitchen />} />
        </Routes>
      </div>
    </Router>
  );
}


export default Navigation;
