import React from "react";
import BiryaniImg1 from "../assets/Buddha Bowl.png";
import BiryaniImg2 from "../assets/Fruitsalad.png";
import BiryaniImg3 from "../assets/Autumn Bowl.png";
import Vector from "../assets/vector3.png";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";




const ImageList = [
  {
    id: 1,
    img: BiryaniImg1,
  },
  {
    id: 2,
    img: BiryaniImg2,
  },
  {
    id: 3,
    img: BiryaniImg3,
  },
];

const Hero = ({cartItems}) => {
  const [imageId, setImageId] = React.useState(BiryaniImg1);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  const hasItemsInCart = cartItems.length > 0;

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-dark dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex w-full flex-col justify-center items-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold pb-6">
                Welcome to{" "}
                <span class="bg-clip-text text-transparent bg-gradient-to-b text-6xl from-primary to-secondary">
                  Bountiful
                </span>{" "}
                Zone
              </h1>
              <p className="text-sm pb-6">
                Indulge in the art of fine dining where every dish tells a story. Our carefully crafted menu features timeless classics and innovative creations, all prepared with the freshest ingredients. Dive into a world of exquisite flavors and memorable experiences at every visit.
              </p>
              <div>
              <Link
              to={hasItemsInCart ? "/shoppingcart" : "/foodmenu"}
              className="justify-center item-center bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 w-32 duration-300 flex items-center gap-2"
            >
              <div className=""><span className="transition duration-1000">{hasItemsInCart ? "Cart" : "Order"}</span></div>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer " />
            </Link>
              </div>
            </div>
            {/* Image section */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-once="true"
                  src={imageId}
                  alt="biryani img"
                  className="w-[300px] sm:w-[450px] sm:scale-125  mx-auto spin "
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
                {ImageList.map((item) => (
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="400"
                    data-aos-once="true"
                    src={item.img}
                    onClick={() => {
                      setImageId(
                        item.id === 1
                          ? BiryaniImg1
                          : item.id === 2
                          ? BiryaniImg2
                          : BiryaniImg3
                      );
                    }}
                    alt="biryani img"
                    className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;