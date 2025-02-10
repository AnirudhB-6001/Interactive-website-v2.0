import React, { useEffect } from "react";
import "./tailwind.css";
import timelineData from "./data/timelineData";
import projectsData from "./data/projectsData";
import TimelineItem from "./components/TimelineItem";
import stylesConfig from "./config/stylesConfig";
import interactionsConfig from "./config/interactionsConfig";

const App = () => {
  useEffect(() => {
    const header = document.getElementById("main-header");
    header.className += ` ${interactionsConfig.fadeInAnimation}`;
  }, []);

  return (
    <div className={`min-h-screen ${stylesConfig.colors.background}`}>
      <nav className={`w-full py-4 bg-white shadow-md fixed top-0 z-10`}>
        <ul className="flex justify-center space-x-6">
          <li>
            <a
              href="#timeline"
              className={`text-${stylesConfig.colors.primary} hover:underline`}
            >
              Timeline
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`text-${stylesConfig.colors.primary} hover:underline`}
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>

      <section
        id="home"
        className={`h-screen flex flex-col items-center justify-center ${stylesConfig.layout.sectionPadding}`}
      >
        <h1
          id="main-header"
          className={`${stylesConfig.fonts.heading} ${interactionsConfig.fadeInAnimation}`}
        >
          Anirudh Batra
        </h1>
        <p className={stylesConfig.fonts.body}>
          Tech-Savvy Sales Leader | Growth Driver
        </p>
      </section>

      <section
        id="timeline"
        className={`${stylesConfig.layout.containerWidth} ${stylesConfig.layout.sectionPadding}`}
      >
        <h2 className="text-3xl font-semibold text-gray-800">
          Career Timeline
        </h2>
        <div className="mt-6 space-y-8">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </section>

      <section
        id="projects"
        className={`${stylesConfig.layout.containerWidth} ${stylesConfig.layout.sectionPadding}`}
      >
        <h2 className="text-3xl font-semibold text-gray-800">
          Projects Showcase
        </h2>
        <div className="mt-6 space-y-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`p-4 bg-white rounded-lg shadow-lg ${interactionsConfig.hoverScale}`}
            >
              <h3 className="text-xl font-bold text-blue-600">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.details}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
