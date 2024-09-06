import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const ProjectLiveLink = () => (
  <div className="flex justify-center items-center">
    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
      Check Live Site
    </p>
    <FontAwesomeIcon
      icon={faLocationArrow}
      className=" w-4 h-4 ms-3 "
      color="#CBACF9"
    />
  </div>
);

export default ProjectLiveLink;
