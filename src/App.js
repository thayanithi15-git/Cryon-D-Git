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
          <Route path="/Home" element={<Home />} />
          <Route path="/Offer" element={<Offer />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
