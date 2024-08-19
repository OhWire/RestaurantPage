import React from "react";
import Restaurant from "../assets/restaurant.jpg";

const Contact = () => {
  return (
    <div className="p-4 py-16 container mx-auto flex flex-col md:flex-row justify-center items-center h-full mt-16">
      <div 
        className="flex flex-col space-y-6 w-full md:w-[50%] h-[90%] px-4 md:px-12"
        data-aos="zoom-out"
        data-aos-duration="400"
        data-aos-once="true"
      >
        <h1 className="text-4xl md:text-5xl font-bold dark:text-black">
          Contact <span className="text-third dark:text-third">Us</span>
        </h1>
        <p className="text-base md:text-lg dark:text-black">
          Have questions or need to make a reservation? Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-base md:text-lg font-medium dark:text-black">Name</label>
            <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-base md:text-lg font-medium dark:text-black">Email</label>
            <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-base md:text-lg font-medium dark:text-black">Message</label>
            <textarea id="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-primary text-white font-bold rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:bg-black">Send Message</button>
        </form>
      </div>
      <div 
        className="flex w-full md:w-[50%] h-full justify-center md:pt-24 mt-6 md:mt-0 rounded-2xl"
        data-aos="zoom-out"
        data-aos-duration="400"
        data-aos-once="true"
      >
        <img src={Restaurant} alt="Restaurant" className="object-cover w-full md:h-[70%] px-4 md:px-6 rounded-2xl" />
      </div>
    </div>
  );
};

export default Contact;
