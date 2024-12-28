import React from "react";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import { FaArrowCircleDown } from "react-icons/fa";
import mePhoto from "../assets/me.jpg";

const Home = () => {
  return (
    <div className="font-medium w-screen h-screen text-center" id="home">
      <Navbar />

      <div className="flex text-white justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl p-1 m-2">
            Hello, I'm <span className="text-secondary">Kevin Payan</span>.
          </h1>
          <h2 className="text-2xl p-1 m-2">I'm a Software Engineer.</h2>

          <a
            href="#about"
            className="flex w-fit justify-center items-center transition-all duration-200 rounded-lg hover:bg-secondary hover:text-white hover:shadow-2xl hover:shadow-secondary border-secondary text-secondary border-double border-4 m-4 p-2 pl-5 pr-5"
          >
            About Me <FaArrowCircleDown className="ml-2" />
          </a>
        </div>
        <img src={mePhoto} alt="me" className="w-1/4 rounded-full m-4 p-4" />
      </div>
    </div>
  );
};

export default Home;
