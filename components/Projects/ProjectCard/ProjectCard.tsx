import { PinContainer } from "@/components/ui/PinContainer";
import ProjectContent from "./ProjectContent";
import ProjectImage from "./ProjectImage";
import ProjectIcons from "./ProjectIcons";
import ProjectLinks from "./ProjectLinks";

export interface ProjectType {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  gitHubLink: string;
  link: string;
}

const ProjectCard = ({ item }: { item: ProjectType }) => (
  <div
    className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
    key={item.id}
  >
    <PinContainer title={item.link} href={item.link}>
      <ProjectImage item={item} />
      <ProjectContent item={item} />
      <div className="flex items-center justify-between mt-7 mb-3">
        <ProjectIcons item={item} />
        <ProjectLinks gitHubLink={item.gitHubLink} link={item.link} />
      </div>
    </PinContainer>
  </div>
);

export default ProjectCard;
