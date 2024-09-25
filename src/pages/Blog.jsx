import React, { useState } from "react";
import "../styles/Blog.css";
import { HiAdjustments } from "react-icons/hi";
import Dog1 from "../assets/Dog1.png";
import Dog2 from "../assets/Dog2.png";
import Dog3 from "../assets/Dog3.png";
export default function Blog() {
  const Head = [
    "All articles",
    " Dog Care",
    "Cat Care",
    "Other Pets",
    "General tips",
  ];

  const [color, setcolor] = useState(2);

  const handleClick = (index) => {
    setcolor(index);
  };



  return (
    <div className="Blog-page">
      <div className="Blog-cont">
        <div className="Blog-Head">
          <div className="maphead">
            {Head.map((item, index) => (
              <div key={index} className="buttonheadbox">
                <button className="buttonhead" style={{ backgroundColor: color === index ? '#000958' : 'initial', color:  color === index ? 'white' : '#000958',  }} onClick={() => handleClick(index)}>{item}</button>
              </div>
            ))}
          </div>
          <div className="Iconhead">
            <HiAdjustments className="iconrot" />
          </div>
        </div>

        <div className="Blog-Mid">
          <div className="midcont">
            <div className="midimg">
              <img src={Dog1} className="dogiamg" alt="" />
            </div>
            <div className="midvalue">
              <div className="img1head">
                5 Tips on How to Make Your Dog's Fur <br /> Healthy and Shiny
              </div>

              <div className="img1vlaue">
                In this article, you will find advice from top veterinarians on
                how to make your dog's fur as nice and shiny as a show dog's
                would be. Any owner can start implementing these 5 practical and
                easy tips today.
              </div>

              <div className="image1aut">Dr.May</div>
            </div>
          </div>
        </div>

        <div className="Blog-Bot">
          <div className="insideBlogbot">
            <div className="botcont1">
              <div className="imagebot1">
                <img src={Dog2} className="dog2img" alt="" />
              </div>
              <div className="image2value">
                <div className="img2head">
                  10 Ways to Keep Your Dog active and Healthy!
                </div>
                <div className="img2valuehe">
                  Regular exercise is crucial to keep your dog in good
                  condition, so try to incorporate activities like daily walks
                  and keep the dog engaged.
                </div>
                <div className="imag2cut" style={{justifyContent:'start'}}>Dr.Peter</div>
              </div>
            </div>
            <div className="botcont1">
              <div className="imagebot1">
                <img src={Dog3} className="dog2img" alt="" />
              </div>
              <div className="image2value">
                <div className="img2head">
                Understanding Your
                Dog's Nutritional Needs
                </div>
                <div className="img2valuehe">
                Dogs require balanced diet that
includes protein, so talk to your vet
about the best food options and ne
sure to include lot of water.
                </div>
                <div className="imag2cut">Dr.Julian</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
