import React from "react";

const SectionHeader = ({
  title,
  customTitle,
}: {
  title: string;
  customTitle?: string;
}) => {
  return (
    <h2 className="heading max-sm:max-w-[96%] mx-auto">
      {title} <span className="text-purple">{customTitle}</span>
    </h2>
  );
};

export default SectionHeader;
