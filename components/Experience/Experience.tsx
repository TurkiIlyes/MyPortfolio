"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/AppleCardsCarousel";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
import { experiences } from "@/data";
import DummyContent from "./DummyContent";

const Experience = () => {
  const cards = experiences.map((card, index) => {
    return (
      <Card
        key={card.src}
        card={{
          ...card,
          content: card.content || (
            <DummyContent img={card.coverImg} des={card.description} />
          ),
        }}
        index={index}
      />
    );
  });

  return (
    <div id="experience" className="w-full h-full py-20">
      <SectionHeader
        title=" A Showcase of My"
        customTitle="Professional Experiences"
      />
      <Carousel items={cards} />
    </div>
  );
};

export default Experience;
