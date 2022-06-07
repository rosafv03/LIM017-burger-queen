import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./RouterComponents/Home";
import { Kitchen } from "./RouterComponents/Kitchen";
import { Login } from "./RouterComponents/Login";
import { Register } from "./RouterComponents/Register";
import { AuthProvider } from "./context/authContext";


export function Navigation() {
  return (
    <Router>
      <div className="Navigation">
      <AuthProvider>
     
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/" element={<Login />} />
          
        </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}


export default Navigation;
