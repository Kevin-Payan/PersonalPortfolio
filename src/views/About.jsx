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

const About = () => {
  return (
    <div className="w-screen h-auto" id="about">
      <h1 className="text-white font-bold text-4xl m-3 p-3">About Me</h1>
      <p className="text-white text-lg m-3 p-3">
        I studied Cybernetic Electronics Engineering, a carrer in which I grew a
        passion for robotics (participating in world championships), AI
        (completed studies on deep learning in China) and software development
        (in which I now work full time).
      </p>
      <h1 className="text-white font-bold text-4xl text-center">My Skills</h1>

      <div className="grid grid-cols-4 grid-rows-4 gap-3 mx-20 justify-items-center">
        <div>
          <Card name="Python" image={pythonImage} />
        </div>
        <div>
          <Card name="JavaScript" image={javascriptImage} />
        </div>
        <div>
          <Card name="TypeScript" image={typescriptImage} />
        </div>
        <div>
          <Card name="Vue.js" image={vueImage} />
        </div>
        <div className="row-start-2">
          <Card name="HTML" image={htmlImage} />
        </div>
        <div className="row-start-2">
          <Card name="CSS" image={cssImage} />
        </div>
        <div className="row-start-2">
          <Card name="Tailwind CSS" image={tailwindImage} />
        </div>
        <div className="row-start-2">
          <Card name="React" image={reactImage} />
        </div>
        <div className="row-start-3">
          <Card name="Node.js" image={nodeImage} />
        </div>
        <div className="row-start-3">
          <Card name="Express.js" image={expressImage} />
        </div>
        <div className="row-start-3">
          <Card name="SQL" image={sqlImage} />
        </div>
        <div className="row-start-3">
          <Card name="MongoDB" image={mongodbImage} />
        </div>
        <div className="col-start-2 row-start-4">
          <Card name="Git" image={gitImage} />
        </div>
        <div className="col-start-3 row-start-4">
          <Card name="AWS" image={awsImage} />
        </div>
      </div>
    </div>
  );
};

export default About;
