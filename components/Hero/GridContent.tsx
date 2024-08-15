import React from "react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import CustomButton from "../ui/CustomButton";

const GridContent = () => {
  return (
    <div className=" mx-auto flex flex-col items-center my-20 max-w-[90vw] md:max-w-3xl lg:max-w-4xl relative z-10 ">
      <h2 className=" uppercase text-[10px] sm:text-xs font-normal tracking-[4px] text-blue-100 ">
        Dynamic Web Magic with Next.js
      </h2>
      <TextGenerateEffect
        className=" text-center text-[40px] md:text-5xl lg:text-6xl "
        words="Transforming Concepts into Seamless User Experiences"
      />
      <p className=" mb-4 text-center text-xs sm:text-base md:text-lg font-normal tracking-widest text-blue-100 ">
        Hi! I&apos;m Ilyess, a Full stack Developer based in Tunisia.
      </p>
      <CustomButton title="See My Work" />
    </div>
  );
};

export default GridContent;
