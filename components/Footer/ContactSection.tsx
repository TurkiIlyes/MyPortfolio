import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../ui/CustomButton";

const ContactSection = () => (
  <div className="flex flex-col items-center">
    <h1 className="heading lg:max-w-[45vw]">
      Ready to take <span className="text-purple">your</span> digital presence
      to the next level?
    </h1>
    <p className="text-white-200 md:mt-10 my-5 text-center">
      Reach out to me today and let&apos;s discuss how I can help you achieve
      your goals.
    </p>
    <a href="mailto:contact@jsmastery.pro">
      <CustomButton title="Let's get in touch" icon={faLocationArrow} />
    </a>
  </div>
);

export default ContactSection;
