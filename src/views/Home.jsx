import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="font-medium">
      <Navbar />
      <div className="p-4 m-4 text-white">
        <h1 className="text-3xl p-1 m-2">
          Mi name is <span className="text-secondary">Kevin Payan</span>
        </h1>
        <h2 className="text-2xl p-1 m-2">Im a Software Engineer</h2>
        <button className="rounded-lg hover:bg-secondary hover:text-white hover:shadow-2xl hover:shadow-secondary border-secondary text-secondary border-double border-4 m-2 p-2 pl-5 pr-5">
          About Me
        </button>
      </div>
      <Sidebar />
    </div>
  );
};

export default Home;
