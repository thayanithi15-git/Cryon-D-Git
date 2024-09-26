import React, { useState } from "react";
import HomePage from "../pages/Home";
import CategoryPage from "../pages/Category";
import BlogPage from "../pages/Blog";
import "../styles/Home.css";

export default function MainPage() {
  const [Home, setHome] = useState(true);
  const [Category, setCategory] = useState(false);
  const [Blog, setBlog] = useState(false);

  const handleHome = () => {
    setHome(true);
    setCategory(false);
    setBlog(false);
  };

  const handleCategory = () => {
    setHome(false);
    setCategory(true);
    setBlog(false);
  };

  const handleBlog = () => {
    setHome(false);
    setCategory(false);
    setBlog(true);
  };

  return (
    <div className="main-page">
      <div className="header-page">
        <div className="header-container">
          <div className="logo-container">
            <i className="fa-solid fa-paw" id="logo"></i>
          </div>
          <div className="header-icons">
            <div onClick={handleHome}>HOME</div>
            <div onClick={handleCategory}>CATEGORY</div>
            <div onClick={handleBlog}>BLOG</div>
          </div>
          <div className="end-icons">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
        <hr className="hr-bar"/>
      </div>
      <div className="body-page">
        {Home ? <HomePage /> : Category ? <CategoryPage /> : <BlogPage />}
      </div>
    </div>
  );
}
