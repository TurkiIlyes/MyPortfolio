"use client";

import useAnimatedName from "./useAnimatedName";

const AnimatedName = ({ className }: { className?: string }) => {
  const { firstName, lastName, index } = useAnimatedName();

  return (
    <span className={className}>
      {firstName
        .slice(0, index)
        .split("")
        .map((char, i) => (
          <span key={i} className=" inline-block animate-fade-slide">
            {char}
          </span>
        ))}
      {index > 1 ? " " : ""}
      {lastName
        .slice(0, index)
        .split("")
        .map((char, i) => (
          <span key={i} className=" inline-block animate-fade-slide">
            {char}
          </span>
        ))}
    </span>
  );
};

export default AnimatedName;
