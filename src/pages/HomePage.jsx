import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}

export default HomePage;
