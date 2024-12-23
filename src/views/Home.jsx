import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="font-medium">
      <Navbar />
      <h1 className="text-white text-3xl">
        Mi name is <span className="text-secondary">Kevin Payan</span>
      </h1>
      <h2 className="text-white text-2xl">Im a Software Engineer</h2>
      <button className="text-white">About Me</button>
      <Sidebar />
    </div>
  );
};

export default Home;
