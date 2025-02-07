import React from "react";

const Card = ({ name, image }) => {
  return (
    <div className="flex font-serif flex-col justify-center items-center rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-accentBlue p-4 m-4 w-36 h-36 bg-card border-2 border-accent hover:border-accentBlue bg-opacity-60 shrink">
      <img src={image} alt={name} className="w-3/5 max-w-[50px] h-auto" />
      <h2 className="text-center mt-4 font-medium text-zinc-200">
        {name}
      </h2>
    </div>
  );
};

export default Card;
