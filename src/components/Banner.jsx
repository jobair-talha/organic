import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BannerImage from "../assets/images/all-herbal-powder.jpg";
import "../sass/components/_banner.scss";

function Banner() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowBack />,
    nextArrow: <IoIosArrowForward />,
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        <div className="w-full h-full">
          <img className="w-full h-full" src={BannerImage} alt="banner" />
        </div>
        <div>
          <img className="w-full h-full" src={BannerImage} alt="banner" />
        </div>
        <div className="w-full h-full">
          <img className="w-full h-full" src={BannerImage} alt="banner" />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
