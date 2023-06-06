import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Navbar from "../components/layout/Navbar/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <Products />
    </>
  );
}

export default HomePage;
