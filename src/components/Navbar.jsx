import React from "react";

const Navbar = () => {
  const linkClasses = "m-4 hover:text-zinc-300 transition-all duration-300";

  return (
    <div className="font-serif flex justify-center text-zinc-500 p-3">
      <a href="#about" className={linkClasses}>
        About
      </a>
      <a href="#experience" className={linkClasses}>
        Experience
      </a>
      <a href="#contact" className={linkClasses}>
        Contact
      </a>
    </div>
  );
};

export default Navbar;
