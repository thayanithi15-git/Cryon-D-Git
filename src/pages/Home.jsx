import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  const [activePage, setActivePage] = useState("/Home");

  return (
    <div>
      <header>
        <nav>Home</nav>
      </header>
      <main></main>
    </div>
  );
}
