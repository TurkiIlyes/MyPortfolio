const ProjectImage = ({ item }: { item: Project }) => (
  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
    <div
      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
      style={{ backgroundColor: "#13162D" }}
    >
      <img src={item.img} alt="cover" className="z-10 absolute bottom-0" />
    </div>
  </div>
);

export default ProjectImage;
