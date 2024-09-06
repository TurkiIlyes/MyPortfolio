import CustomSpotLights from "./CustomSpotLights";
import GridBackground from "./GridBackground";
import GridContent from "./GridContent";

const Hero = () => {
  return (
    <div className="pt-36 pb-8">
      <CustomSpotLights />
      <GridBackground />
      <GridContent />
    </div>
  );
};

export default Hero;
