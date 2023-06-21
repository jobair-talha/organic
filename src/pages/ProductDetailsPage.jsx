import React, { useEffect } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar/Navbar";
import ProductDetails from "../components/product/ProductDetails";

const ProductDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <ProductDetails />
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
