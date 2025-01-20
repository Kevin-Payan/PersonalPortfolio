import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbBriefcase } from "react-icons/tb";
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
      <VerticalTimeline>
        <VerticalTimelineElement
          //className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(123, 190, 227)",
            color: "#ffffff",
          }}
          contentArrowStyle={{ borderRight: "12px solid  rgb(123, 190, 227)" }}
          date="2011 - present"
          iconStyle={{ background: accentBlueColor, color: "#fff" }}
          icon={<TbBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Development Engineer in Test
          </h3>
          <p>Describe your activities</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          //className="vertical-timeline-element--education"
          date="June 2025 - March 2025"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<HiOutlineComputerDesktop />}
        >
          <p>content</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          //className="vertical-timeline-element--education"
          date="August 2021 - May 2025"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<IoSchoolOutline />}
        >
          <p>content</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
