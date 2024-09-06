import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ProjectLinks = () => (
  <div className="flex gap-2 justify-center items-center">
    <Link
      href="#"
      className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
    >
      <img src="/git.svg" alt="git" width={20} height={20} />
    </Link>
    <Link
      href="#"
      className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
    >
      <FontAwesomeIcon icon={faLocationArrow} className=" w-4 h-4 " />
    </Link>
  </div>
);

export default ProjectLinks;
