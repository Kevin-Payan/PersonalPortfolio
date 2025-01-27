import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";
//import { TbBriefcase2Filled } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);
const primaryColor = fullConfig.theme.colors.primary;
const secondaryColor = fullConfig.theme.colors.secondary;
const accentBlueColor = fullConfig.theme.colors.accentBlue;

const Experience = () => {
  return (
    <div id="experience" className="w-screen h-auto m-5 p-5">
      <h1 className="text-white font-semibold text-4xl m-3 ml-14 p-3 underline decoration-secondary underline-offset-4 font-title">
        Experience
      </h1>
      <VerticalTimeline lineColor="#757678"> 
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(123, 190, 227)",
            color: "#ffffff",
          }}
          contentArrowStyle={{ borderRight: "12px solid  rgb(123, 190, 227)" }}
          date="2011 - present"
          iconStyle={{ background: accentBlueColor, color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Development Engineer in Test
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Trimble</h4>
          <p>Describe your activities</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="June 2025 - March 2025"
          icon={<FaCode />}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff", border: "4px solid rgb(148, 19, 62)", boxShadow: 'none' }}
          contentStyle={{ background: "rgb(233, 30, 99, 0.75)", color: "#fff",   boxShadow: 'none' }}
          contentArrowStyle={{ borderRight: "12px solid rgb(233, 30, 99, 0.75)" }}
        >
          <h3 className="font-bold text-xl">
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Trimble</h4>
          <p>QA, DEV</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="August 2021 - May 2025"
          icon={<IoSchool />}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff", border: "4px solid rgb(148, 19, 62)", boxShadow: 'none' }}
          contentStyle={{ background: "rgb(233, 30, 99, 0.75)", color: "#fff",   boxShadow: 'none' }}
          contentArrowStyle={{ borderRight: "12px solid rgb(233, 30, 99, 0.75)" }}
        >
          <p>content</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
