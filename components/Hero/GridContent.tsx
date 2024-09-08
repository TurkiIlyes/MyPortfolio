import React from "react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import CustomButton from "../ui/CustomButton";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import AnimatedName from "../Common/AnimatedName/AnimatedName";

const GridContent = () => {
  return (
    <div className=" mx-auto flex flex-col items-center my-16 max-w-[90vw] md:max-w-3xl lg:max-w-4xl relative z-10 ">
      <h2 className=" uppercase text-[8px] sm:text-xs font-normal tracking-[2px] sm:tracking-[4px] text-blue-100 ">
        Engineering Exceptional Digital Experiences
      </h2>
      <TextGenerateEffect
        className=" text-center text-[33px] md:text-5xl lg:text-6xl "
        words="Crafting Innovative Solutions with Next.js & MERN Stack"
      />
      <div className=" mb-6 text-center text-xs sm:text-base md:text-lg font-normal tracking-widest text-blue-100 ">
        <span>Hi! I&apos;m</span>{" "}
        <AnimatedName className=" text-sm sm:text-md md:text-xl text-purple font-black tracking-[2px] " />
        <span>,</span>
        <p className="  leading-loose ">
          a Full stack Developer based in Tunisia.
        </p>
      </div>
      <CustomButton
        title="See My Work"
        icon={faLocationArrow}
        link="#projects"
      />
    </div>
  );
};

export default GridContent;
