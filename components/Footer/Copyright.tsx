import AnimatedName from "../Common/AnimatedName/AnimatedName";

const Copyright = () => (
  <div className="flex gap-2 md:text-base text-sm md:font-normal font-light">
    <p className="">Copyright &copy; {new Date().getFullYear()}</p>
    <AnimatedName />
  </div>
);

export default Copyright;
