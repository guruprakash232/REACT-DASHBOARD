import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./assets/components/Sidebar";
import Content from "./assets/components/Content";
import Profile from "./assets/components/Profile";
import Login from "./assets/auth/Login";
import "./App.css";

const Dashboard = () => (
  <div className="dashboard">
    <Sidebar />
    <div className="dashboard--content">
      <Content />
      <Profile />
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        {<Route path="/" element={<Login />} /> }
      </Routes>
    </BrowserRouter>
  );
};

export default App;
