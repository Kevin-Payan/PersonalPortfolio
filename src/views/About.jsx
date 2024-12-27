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
    <div className="w-screen h-screen" id="about">
      <h1>About Me</h1>
      <p>My name is Kevin Payan, I'm a Software Engineer</p>
      <Card name="Python" image={pythonImage} />
      <Card name="JavaScript" image={javascriptImage} />
      <Card name="TypeScript" image={typescriptImage} />
      <Card name="HTML" image={htmlImage} />
      <Card name="CSS" image={cssImage} />
      <Card name="Tailwind CSS" image={tailwindImage} />
      <Card name="React" image={reactImage} />
      <Card name="Vue.js" image={vueImage} />
      <Card name="Node.js" image={nodeImage} />
      <Card name="Express.js" image={expressImage} />
      <Card name="SQL" image={sqlImage} />
      <Card name="MongoDB" image={mongodbImage} />
      <Card name="Git" image={gitImage} />
      <Card name="AWS" image={awsImage} />
    </div>
  );
};

export default About;
