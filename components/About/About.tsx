import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import { AboutItems } from "@/data";

const About = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {AboutItems.map(
          (
            {
              id,
              title,
              description,
              className,
              imgClassName,
              titleClassName,
              img,
              spareImg,
            },
            i
          ) => (
            <BentoGridItem
              id={id}
              key={i}
              title={title}
              description={description}
              className={className}
              titleClassName={titleClassName}
              imgClassName={imgClassName}
              img={img}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default About;
