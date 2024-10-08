import React from "react";
import "../styles/Home.css";
import logo from "../assets/logo.jpg"
import { IoSearch } from "react-icons/io5";

export default function Home() {
  return (
    <div className="S_one">
      <div className="hii">
      <div className="Left">
        <div className="S_mypet">
          best place to bye top quality products for your pet .
        </div>
        <div className="ssss">Shop by Dog , brand on products on sale!</div>
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
          <img src={logo} style={{ height: "100%", width: "100%" ,borderRadius:'50px' }} />
        </div>
      </div>
      </div>
      <div className="category-footer">
          <div className="logo-container-footer">
            <i
              className="fa-solid fa-paw"
              id="logo"
              style={{ backgroundColor: "#FDE7CB" }}></i>
          </div>

          <div className="footer-main">
            <marquee style={{ backgroundColor: "#FDE7CB" }}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  backgroundColor: "#FDE7CB",
                }}>
                <div style={{ fontWeight: "550", backgroundColor: "#FDE7CB" }}>
                  Contributed by :{" "}
                </div>
                {/* <div className="team-names"> */}
                <div style={{ backgroundColor: "#FDE7CB" }}>SELVAPRAVEEN S</div>
                <div style={{ backgroundColor: "#FDE7CB" }}>THAYANITHI S</div>
                <div style={{ backgroundColor: "#FDE7CB" }}>SIVABALAN P</div>
              </div>
            </marquee>
          </div>
          <div className="social-main">
            <div className="social-icons">
              <i className="fa-brands fa-instagram" style={{backgroundColor: "#FDE7CB"}}></i>
              <i className="fa-brands fa-twitter"  style={{backgroundColor: "#FDE7CB"}}></i>
              <i className="fa-brands fa-facebook"  style={{backgroundColor: "#FDE7CB"}}></i>
            </div>
          </div>
        </div>
      
    </div>
  );
}