import React, { useState } from "react";
import "../styles/Home.css";
import logo from "../assets/logo.jpg"
import { IoSearch } from "react-icons/io5";

export default function Home() {
  return (
    <div className="S_one">
      <div className="Left">
        <div className="S_mypet">
          The best place to bye top quality products for your pet
        </div>
        <div className="ssss">Shop by pet , brand on products on sale!</div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            padding: "40px 0",
          }}
        >
          <div className="abcd">
            <div style={{ height: "100%", width: "90%" }}>
              <input
                type="text"
                placeholder="What are you looking for&ensp;?"
                className="search"
                style={{
                  height: "100%",
                  border: "none",
                  width: "90%",
                  padding: "0 20px",
                  backgroundColor: "#FDFDFD",
                }}
              />
            </div>
            <div
              style={{
                height: "100%",
                width: "10%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IoSearch
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "25px",
                }}
              />
            </div>
          </div>
          <button
            style={{
              width: "20%",
              backgroundColor: "orangered",
              cursor:'pointer',
              color: "#FDFDFD",
              fontWeight: "600",
              border: "none",
              borderRadius: "20px",
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="img">
        <div className="imgone">
          <img src={logo} style={{ height: "100%", width: "100%" }} />
        </div>
      </div>
      
    </div>
  );
}