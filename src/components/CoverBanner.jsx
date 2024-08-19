import React from "react";
import bgCoverImg from "../assets/bowlwp.jpg";

const CoverBanner = () => {
  const bgImage = {
    backgroundImage: `url(${bgCoverImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "150px",

  };

  return (
    <div style={bgImage} className="flex justify-center items-center w-full bg-fill bg-center sm:h-[200px] md:h-[250px] lg:h-[300px]">
      <div className="h-full flex justify-center items-center text-black w-full ">
        <h1 className="text-xl sm:text-4xl md:text-2xl lg:text-2xl font-bold font-playwrite text-center">
          Health. Lifestyle. Food.
        </h1>
      </div>
    </div>
  );
};

export default CoverBanner;
