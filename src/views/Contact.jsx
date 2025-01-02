import React from "react";
import Socials from "../components/Socials";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-screen h-screen text-center text-white m-8 p-8"
    >
      <h2 className="p-3 underline decoration-secondary underline-offset-2">
        Get in touch
      </h2>
      <h1 className="font-title font-medium p-3 text-3xl">
        Let's work together
      </h1>
      <div className="p-2">
        <p>
          If you are looking for a
          <span className="text-secondary"> developer</span> to help you build
          your next project,
        </p>
        <p>or need help with an existing one, I'd love to hear from you.</p>
        <p>
          Feel free to <span className="text-secondary">contact me</span> using
          the socials below.
        </p>
      </div>
      <Socials />
      <p className="mt-4 text-xs">
        <span className="text-zinc-400">@2025 All rights reserved. -</span>{" "}
        Designed and Coded by Kevin Payan
      </p>
    </div>
  );
};

export default Contact;
