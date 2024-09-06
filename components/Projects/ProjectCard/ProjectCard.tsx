import { PinContainer } from "@/components/ui/PinContainer";
import ProjectContent from "./ProjectContent";
import ProjectImage from "./ProjectImage";
import ProjectIcons from "./ProjectIcons";
import ProjectLiveLink from "./ProjectLiveLink";

export interface ProjectType {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
}

const ProjectCard = ({ item }: { item: ProjectType }) => (
  <div
    className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
    key={item.id}
  >
    <PinContainer
      title="/ui.aceternity.com"
      href="https://twitter.com/mannupaaji"
    >
      <ProjectImage item={item} />
      <ProjectContent item={item} />
      <div className="flex items-center justify-between mt-7 mb-3">
        <ProjectIcons item={item} />
        <ProjectLiveLink />
      </div>
    </PinContainer>
  </div>
);

export default ProjectCard;
