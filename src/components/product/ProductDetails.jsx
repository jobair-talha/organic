import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import "../../sass/layout/_scrollbar.scss";
import { InnerText } from "../../static/description";

const ProductDetails = () => {
  const [image, setImage] = useState(
    "https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?t=st=1687368491~exp=1687369091~hmac=5a63eb4e1015da0e7d3a3c9abc3906cb2947b72423bf51adfd74c05bb43451f1"
  );

  return (
    <section>
      <div className="max-w-screen-xl mx-auto mt-7 p-4  translate-[-50%,-50%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="image">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  isActivatedOnTouch: true,
                  src: image,
                  width: 300,
                  height: 600,
                },
                largeImage: {
                  src: image,
                  width: 800,
                  height: 1200,
                  isFluidWidth: true,
                },
              }}
            />
            <div>
              <div className="grid grid-cols-5  gap-2 mt-4 cursor-pointer">
                <img
                  onClick={() =>
                    setImage(
                      "https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?t=st=1687368491~exp=1687369091~hmac=5a63eb4e1015da0e7d3a3c9abc3906cb2947b72423bf51adfd74c05bb43451f1"
                    )
                  }
                  className=" w-[100%] object-cover"
                  src="https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?t=st=1687368491~exp=1687369091~hmac=5a63eb4e1015da0e7d3a3c9abc3906cb2947b72423bf51adfd74c05bb43451f1"
                  alt=""
                />
                <img
                  onClick={() =>
                    setImage(
                      "https://img.freepik.com/premium-photo/vegetables-fruits-white_55883-892.jpg"
                    )
                  }
                  className=" w-[100%] object-cover cursor-pointer"
                  src="https://img.freepik.com/premium-photo/vegetables-fruits-white_55883-892.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="details">
            <h3 className=" font-bold text-3xl">Alubukhara – আলু বোখারা</h3>
            <h3 className="text-primary font-bold text-2xl mt-3">
              ৳ 60.00 – ৳ 120.00
            </h3>
            <p className=" my-3 text-lg">
              Alu Bukhara is a very famous, nutritious, and summer season fruit
              that is very sweet and juicy. It is found in abundant amounts
              during the season and most loved by the people because it helps to
              keep their health strong and powerful. Alu Bukhara fruit belongs
              botanically to the family of Rosaceae and genus Prunus domestica
              and comes in a panorama of colors.
            </p>
            <button className="uppercase bg-primary text-white  px-4 py-2">
              Add to Cart
            </button>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <br />
        <div>
          <h3 className=" uppercase text-primary mb-3 font-bold">
            Description
          </h3>
          <div className="py-4">
            <div className="container h-[250px] overflow-y-hidden hover:overflow-y-scroll">
              <div dangerouslySetInnerHTML={{ __html: InnerText }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
