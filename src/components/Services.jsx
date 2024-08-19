import React from "react"
import Img1 from "../assets/Buddha Bowl.png"
import Img2 from "../assets/Green Goddess Bowl.png"
import Img3 from "../assets/Fruitsalad.png"


const ServicesData = [
    {
      id: 1,
      img: Img1,
      name: "Buddha Bowl",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    },
    {
      id: 2,
      img: Img2,
      name: "Green Goddess Bowl",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
    {
      id: 3,
      img: Img3,
      name: "Fruit Salad",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
  ];


const Services = () => {
  return( <>
     <div className="py-10">
        <div className="container">
             {/* Header Section */}

            <div className="text-center mb-20 max-w-[400px] mx-auto ">
                
                <h1 className="text-5xl  font-bold pb-3 font-playwrite">Services</h1>
                <p className="text-xs text-black black:text-gray-200 tracking-wide"> {" "}Indulge in our exquisite culinary creations. Our chefs craft each dish with passion, ensuring a delightful dining experience for every guest.</p>
            </div>
            {/* Card Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                {ServicesData.map(({id, img, name, description}) => {
                    return <div key={id} className="max-w-[300px] group rounded-2xl bg-white dark:bg-dark hover:bg-primary hover:text-white duration-300 p-4 shadow-xl ">
                        <div className="h-[100px] mb-6">
                            <img src={img} alt="" className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300  " />
                        </div>
                        <div className="p-4 text-center ">
                            <h1 className="text-xl font-bold">{name}</h1>
                            <p className="text-black dark:text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{description}</p>
                        </div>
                    </div>
                }
            
            )}
            </div>
        </div>
     </div>
  </>
  );
};

export default Services;
