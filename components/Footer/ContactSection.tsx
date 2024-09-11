import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../ui/CustomButton";

const ContactSection = () => (
  <div className="flex flex-col items-center">
    <h1 className="heading lg:max-w-[45vw]">
      Ready to take <span className="text-purple">your</span> digital presence
      to the next level?
    </h1>
    <p className="text-white-200 md:mt-10 my-5 text-center lg:max-w-[45vw] ">
      Reach out to discuss how we can turn your vision into reality. Whether
      you’re looking to develop a new project or need a reliable developer to
      join your team, I’m here to help you succeed.
    </p>
    <a href="mailto:turki.ilyes.dev@gmail.com">
      <CustomButton title="Let’s Get in Touch" icon={faLocationArrow} />
    </a>
  </div>
);

export default ContactSection;
