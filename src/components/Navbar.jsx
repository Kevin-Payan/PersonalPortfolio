import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center text-zinc-500 p-3">
      <a className="m-4 hover:text-zinc-300">Home</a>
      <a href="#about" className="m-4 hover:text-zinc-300">
        About
      </a>
      <a href="#contact" className="m-4 hover:text-zinc-300">
        Contact
      </a>
    </div>
  );
};

export default Navbar;
