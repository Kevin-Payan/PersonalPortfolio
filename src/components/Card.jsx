import React from "react";

const Card = ({ name, image }) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-2xl shadow-2xl p-4 m-4 w-36 h-36 bg-card border-2 border-zinc-800">
      <img src={image} alt={name} className="w-12 h-12" />
      <h2 className="text-center mt-4 text-l font-medium text-zinc-200">
        {name}
      </h2>
    </div>
  );
};

export default Card;