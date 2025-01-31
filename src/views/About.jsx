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
  return (
    <div className="w-screen h-auto m-5 p-5 bg-accent" id="about">
      <h1 className="text-white font-semibold text-4xl m-3 p-3 underline decoration-secondary underline-offset-4 font-title">
        About Me
      </h1>
      <div className="text-white text-lg m-3 mb-14 p-3 rounded-md bg-card italic bg-opacity-30">
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
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <Card name="Python" image={pythonImage} />
          <Card name="JavaScript" image={javascriptImage} />
          <Card name="Tailwind CSS" image={tailwindImage} />
          <Card name="React" image={reactImage} />
        </div>
        <div className="flex justify-center items-center">
          <Card name="Node.js" image={nodeImage} />
          <Card name="Express.js" image={expressImage} />
          <Card name="SQL" image={sqlImage} />
          <Card name="MongoDB" image={mongodbImage} />
        </div>
        <div className="flex justify-center items-center">
          <Card name="Git" image={gitImage} />
          <Card name="AWS" image={awsImage} />
          <Card name="Firebase" image={firebaseImage} />
        </div>
      </div>
    </div>
  );
};

export default About;
