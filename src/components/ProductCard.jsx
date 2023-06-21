import { Link } from "react-router-dom";
import ProductImage from "../assets/images/Mct-Oil-500ml.jpg";

function ProductCard() {
  return (
    <>
      <div className="text-center">
        <div className="relative">
          <Link to={`/products/1`}>
            <img src={ProductImage} alt="product" />
          </Link>
        </div>
        <div className="mt-3">
          <h3>AgriLife MCT Oil – 500ml Lorem ipsum dolor sit.</h3>
          <h4 className="text-primary">৳ 550</h4>
          <p className="text-primary">500 ml</p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
