import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; // Import slick styles

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "The experience at Bountiful Bowls was nothing short of exceptional. From the moment we walked in, we were greeted with warm smiles and a cozy ambiance. The sushi bowls were a delightful surprise – fresh, flavorful, and beautifully presented. The service was prompt and attentive, making our evening truly memorable. We'll definitely be returning soon!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "John Doe",
    text: "I visited Bountiful Bowls last weekend, and I must say, it was one of the best dining experiences I've had in a long time. The steak bowl was cooked to perfection, and the ingredients were incredibly fresh. The staff were friendly and went out of their way to ensure we had everything we needed. The atmosphere was vibrant and welcoming, making it a perfect spot for a casual yet high-quality meal.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Smith",
    text: "Bountiful Bowls has quickly become my go-to place for a healthy and delicious meal. The variety on the menu is fantastic, catering to both vegans and meat lovers alike. I tried the salad bowl, and it was packed with flavor and fresh ingredients. The service is always top-notch, and the staff are genuinely passionate about the food they serve. Highly recommend this gem of a restaurant!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-6 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-black bg-gradient-to-r from-primary to-secondary">
              What our customers say
            </p>
            <h1 className="text-5xl font-bold dark:text-black pb-6">Testimonial</h1>
            <p className="text-sm text-gray-400 dark:text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => (
                <div key={data.id} className="my-6">
                  <div
                    className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-dark bg-primary/10 relative"
                  >
                    <img
                      className="rounded-full block mx-auto"
                      src={data.img}
                      alt={data.name}
                    />
                    <p className="text-gray-500 dark:text-white text-sm">{data.text}</p>
                    <h1 className="text-xl font-bold">{data.name}</h1>
                    <p className="text-black/20 dark:text-white text-4xl font-serif absolute p-6 top-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
