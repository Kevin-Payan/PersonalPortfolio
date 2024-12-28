import React from "react";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import { FaArrowCircleDown } from "react-icons/fa";

const Home = () => {
  return (
    <div className="font-medium w-screen h-screen text-center" id="home">
      <Navbar />
      <div className="p-4 m-4 text-white">
        <div className="m-4 p-4">
          <h1 className="text-3xl p-1 m-2">
            My name is <span className="text-secondary">Kevin Payan</span>
          </h1>
          <h2 className="text-2xl p-1 m-2">Im a Software Engineer</h2>
        </div>
        <div className="flex justify-center">
          <a
            href="#about"
            className="flex w-fit justify-center items-center transition-all duration-200 rounded-lg hover:bg-secondary hover:text-white hover:shadow-2xl hover:shadow-secondary border-secondary text-secondary border-double border-4 m-4 p-2 pl-5 pr-5"
          >
            About Me <FaArrowCircleDown className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
