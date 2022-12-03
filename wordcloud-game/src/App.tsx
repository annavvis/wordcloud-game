import React from "react";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { GamePage } from "./components/GamePage/GamePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
