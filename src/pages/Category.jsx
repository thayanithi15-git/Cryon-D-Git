import React from "react";
import Puppy from "../assets/puppy.png";
import Cat from "../assets/cat.png";
import Fish from "../assets/fish.png";
import Bird from "../assets/bird.png";
import Rabbit from "../assets/rabbit.png";
import Reptiles from "../assets/chameleon.png";
import Toys from "../assets/toys.png";
import Balloon from "../assets/balloon.png";
import "../styles/Category.css";
import { BsDisplay } from "react-icons/bs";

export default function Category() {
  const Categories = [
    { name: "Dog", image: Puppy },
    { name: "Cats", image: Cat },
    { name: "Fish", image: Fish },
    { name: "Birds", image: Bird },
    { name: "Small pets", image: Rabbit },
    { name: "Reptiles", image: Reptiles },
    { name: "Toys", image: Toys },
    { name: "Sale", image: Balloon },
  ];

  return (
    <div className="category-page">
      <div className="category-contents">
        <div
          style={{
            fontSize: "23px",
            fontWeight: "550",
            color: "#000958",
            marginTop: "3%",
          }}>
          Categories
        </div>
        <div className="grid-box">
          {Categories.map((id) => (
            <div key={id} className="items">
              {/* <div > */}
              <div className="item-name">{id.name}</div>
              {/* <div style={{fontSize: "1px"}}></div> */}
              <img src={id.image} className="item-img" />
              {/* </div> */}
            </div>
          ))}
        </div>
        <div className="category-footer">
          <div className="logo-container-footer">
            <i
              class="fa-solid fa-paw"
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
              <i class="fa-brands fa-instagram" style={{backgroundColor: "#FDE7CB"}}></i>
              <i class="fa-brands fa-twitter"  style={{backgroundColor: "#FDE7CB"}}></i>
              <i class="fa-brands fa-facebook"  style={{backgroundColor: "#FDE7CB"}}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
