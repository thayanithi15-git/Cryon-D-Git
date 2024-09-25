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
        <div className="logo">Logo</div>
        <div className="header-icons">
          <div onClick={handleHome}>HOME</div>
          <div onClick={handleCategory}>CATEGORY</div>
          <div onClick={handleBlog}>BLOG</div>
        </div>
      </div>
      <div className="body-page">
        {Home ? <HomePage /> : Category ? <CategoryPage /> : <BlogPage />}
      </div>
    </div>
  );
}
