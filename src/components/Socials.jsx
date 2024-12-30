import React from "react";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { TbMail } from "react-icons/tb";

const Sidebar = () => {
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;

  return (
    <div className="flex justify-center text-white text-2xl m-4 p-2">
      <a href={`https://wa.me/${phoneNumber}`} className="m-2">
        <FaWhatsapp />
      </a>
      <a href="mailto:kevinpn@hotmail.com" className="m-2">
        <TbMail />
      </a>
      <a href="https://www.linkedin.com/in/kevinpayan/" className="m-2">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/Kevin-Payan" className="m-2">
        <GrGithub />
      </a>
    </div>
  );
};

export default Sidebar;
