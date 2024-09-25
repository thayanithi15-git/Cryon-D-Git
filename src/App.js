import Home from "./pages/Home";
import Offer from "./pages/Blog";
import Booking from "./pages/Category";
import { Route, BrowserRouter, Routes, Navigate, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import MainPage from "./component/MainPage";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
