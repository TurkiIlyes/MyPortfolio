import { ProjectType } from "./ProjectCard";

const ProjectContent = ({ item }: { item: ProjectType }) => (
  <>
    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
      {item.title}
    </h1>
    <p
      className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
      style={{
        color: "#BEC1DD",
        margin: "1vh 0",
      }}
    >
      {item.des}
    </p>
  </>
);

export default ProjectContent;
