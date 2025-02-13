import React from "react";
import {motion} from "framer-motion";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import { FaArrowCircleDown } from "react-icons/fa";
import mePhoto from "../assets/me_nobackground.png";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center font-medium w-screen h-screen text-center bg-gradient-to-br from-gray-900 via-blue-950 to-cyan-800" id="home">
      <Navbar />

      <div className="flex text-white justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl p-1 m-2 font-title">
            Hello, I'm <span className="text-secondary">Kevin Payan</span>.
          </h1>
          <h2 className="text-2xl p-1 m-2 font-title">
            I'm a Software Engineer.
          </h2>
          <Socials />
          <a
            href="#about"
            className="flex w-fit justify-center items-center transition-all duration-200 rounded-lg hover:bg-blue-500 hover:text-white hover:shadow-2xl hover:shadow-blue-500/50 border-blue-500 text-blue-500 border-double border-4 m-4 p-2 pl-5 pr-5"
          >
            About Me <FaArrowCircleDown className="ml-2" />
          </a>
        </div>
        <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-cyan-700 rounded-3xl transform rotate-6 opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-blue-800 rounded-3xl transform -rotate-6 opacity-50"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={mePhoto}
                  alt="A photo of me, Kevin Payan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
      </div>
    </div>
  );
};

export default Home;
