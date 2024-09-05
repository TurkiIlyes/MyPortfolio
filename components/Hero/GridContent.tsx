import React from "react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import CustomButton from "../ui/CustomButton";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import AnimatedName from "../Footer/AnimatedName";

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
      {/* <AnimatedName /> */}
      <div className=" mb-4 text-center text-xs sm:text-base md:text-lg font-normal tracking-widest text-blue-100 ">
        <span className="">Hi! I&apos;m</span>{" "}
        <AnimatedName className=" text-purple font-black " />
        <span className="">,</span>
        <div className="">a Full stack Developer based in Tunisia.</div>
      </div>
      <CustomButton title="See My Work" icon={faLocationArrow} />
    </div>
  );
};

export default GridContent;
