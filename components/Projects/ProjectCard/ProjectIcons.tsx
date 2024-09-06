import { ProjectType } from "./ProjectCard";

const ProjectIcons = ({ item }: { item: ProjectType }) => (
  <div className="flex items-center">
    {item.iconLists.map((icon, index) => (
      <div
        key={index}
        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
        style={{
          transform: `translateX(-${5 * index + 2}px)`,
        }}
      >
        <img src={icon} alt="icon5" className="p-2" />
      </div>
    ))}
  </div>
);

export default ProjectIcons;
