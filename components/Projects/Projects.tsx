"use client";
import { projects } from "@/data";

import SectionHeader from "../Common/SectionHeader/SectionHeader";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="py-20">
      <SectionHeader
        title="A small selection of"
        customTitle="recent projects"
      />
      <div className="flex flex-wrap items-center justify-center px-4 gap-x-20 gap-y-8 mt-10">
        {projects.map((item) => (
          <ProjectCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
