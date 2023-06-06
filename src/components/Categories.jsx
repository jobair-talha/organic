import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../sass/components/_categories.scss";
import CategoriesCard from "./CategoriesCard";

function Categories() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowBack />,
    nextArrow: <IoIosArrowForward />,
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-14 categories">
      <Slider {...settings}>
        {[...Array(12)].map((item, index) => (
          <CategoriesCard key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default Categories;
