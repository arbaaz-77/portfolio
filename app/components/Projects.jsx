import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS_DATA } from "../data";

const Projects = () => {
  return (
    <div id="projects">
      <h2 className="text-center text-4xl font-bold text-white my-6">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.image}
            title={project.title}
            desc={project.desc}
            tags={project.tags}
            gitUrl={project.gitUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
