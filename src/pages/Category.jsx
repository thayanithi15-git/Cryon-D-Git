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
        <div style={{fontSize: "23px",fontWeight: "550",color: "#000958"}}>Categories</div>
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
      </div>
    </div>
  );
}
