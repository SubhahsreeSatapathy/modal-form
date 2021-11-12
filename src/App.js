import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/index";
import Home from "./components/Home/Home";
import { Route, Router, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
