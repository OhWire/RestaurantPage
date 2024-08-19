import React from "react";
import Team from "../assets/team.jpg";

const About = () => {
  return (
    <div className="p-4 py-12 mt-16 md:my-12 container mx-auto flex flex-col md:flex-row justify-center items-center h-full">
      <div 
        className="flex flex-col space-y-6 w-full md:w-[50%] h-[90%] px-4 md:px-12"
        data-aos="zoom-out"
        data-aos-duration="400"
        data-aos-once="true"
      >
        <h1 className="text-4xl md:text-5xl font-bold dark:text-black">
          About <span className="text-primary dark:text-third">Us</span>
        </h1>
        <p className="text-base md:text-lg dark:text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, numquam consequatur tempore et similique necessitatibus fugiat soluta recusandae sequi facere?
        </p>
        <p className="text-base md:text-lg dark:text-black">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo sint minima aut sunt optio molestias, voluptates quidem? Totam nostrum esse, est adipisci temporibus autem laborum amet recusandae tempora ratione cumque aut incidunt necessitatibus voluptatum eaque provident nam, pariatur minima quo!
        </p>
        <p className="text-base md:text-lg dark:text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur minima iusto? Repellat provident voluptatibus, iure dignissimos incidunt impedit nesciunt saepe culpa rerum quos ullam cumque repudiandae harum illum in voluptatem, a quis pariatur alias nobis adipisci praesentium. Pariatur quis, nisi aspernatur voluptatibus illo, exercitationem error illum, corporis odio vitae unde tempore sunt repellendus soluta possimus quo eius aliquam itaque.
        </p>
      </div>
      <div 
        className="flex w-full md:w-[50%] h-full justify-center items-center rounded-2xl mt-6 md:mt-0"
        data-aos="zoom-out"
        data-aos-duration="400"
        data-aos-once="true"
      >
        <img src={Team} alt="Team" className="object-cover w-full md:h-[60%] px-4 md:px-6 rounded-2xl" />
      </div>
    </div>
  );
};

export default About;
