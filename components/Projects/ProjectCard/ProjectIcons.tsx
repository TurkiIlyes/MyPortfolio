import { ProjectType } from "./ProjectCard";

const ProjectIcons = ({ item }: { item: ProjectType }) => (
  <div className="flex items-center">
    {item.iconLists.map((icon, index) => (
      <div
        key={index}
        className="border border-white/[.2] rounded-full bg-black-100 lg:w-10 lg:h-10 w-7 h-7 flex justify-center items-center"
        style={{
          transform: `translateX(-${5 * index + 2}px)`,
        }}
      >
        <img src={icon} alt="icon5" className="p-1.5" />
      </div>
    ))}
  </div>
);

export default ProjectIcons;
