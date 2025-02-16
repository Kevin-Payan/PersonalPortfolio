import React from "react";
import Card from "../components/Card";
import pythonImage from "../assets/skills/python.svg";
import javascriptImage from "../assets/skills/js.svg";
import typescriptImage from "../assets/skills/ts.svg";
import htmlImage from "../assets/skills/html.svg";
import cssImage from "../assets/skills/css.svg";
import tailwindImage from "../assets/skills/tailwind.svg";
import reactImage from "../assets/skills/react.svg";
import vueImage from "../assets/skills/vue.svg";
import nodeImage from "../assets/skills/node.svg";
import expressImage from "../assets/skills/express2.svg";
import sqlImage from "../assets/skills/sql.svg";
import mongodbImage from "../assets/skills/mongodb.svg";
import gitImage from "../assets/skills/git.svg";
import awsImage from "../assets/skills/aws.svg";
import firebaseImage from "../assets/skills/firebase.svg";

const About = () => {

  const skills = [
    { name: "Python", image: pythonImage },
    { name: "JavaScript", image: javascriptImage },
    { name: "Tailwind CSS", image: tailwindImage },
    { name: "React", image: reactImage },
    { name: "Node.js", image: nodeImage },
    { name: "Express.js", image: expressImage },
    { name: "SQL", image: sqlImage },
    { name: "MongoDB", image: mongodbImage },
    { name: "Git", image: gitImage },
    { name: "AWS", image: awsImage },
    { name: "Firebase", image: firebaseImage }
  ];

  return (
    <div className="w-screen h-auto p-5 bg-gradient-to-b from-gray-900 via-gray-900 to-cyan-950
" id="about">
      <h1 className="text-white font-semibold text-4xl m-3 p-3 underline decoration-secondary underline-offset-4 font-title">
        About Me
      </h1>
      <div className="text-white text-lg m-3 mb-14 md:mx-6 p-3 rounded-md bg-card italic bg-opacity-30">
        <p>
          "Building the future, one line of code at a time. As a Software
          Engineer with a passion for{" "}
          <span className="text-secondary font-semibold">AI</span>, I enjoy
          creating solutions that make people's lives easier."
        </p>
      </div>

      <h1 className="text-white font-semibold text-4xl text-center m-4 font-title">
        My Skills
      </h1>
      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <Card 
            key={skill.name}
            name={skill.name}
            image={skill.image}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default About;
