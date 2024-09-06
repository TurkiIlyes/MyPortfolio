import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const CustomButton = ({
  title,
  icon,
  className,
  link,
  handleClick,
}: {
  title: string;
  icon?: IconProp;
  className?: string;
  link?: string;
  handleClick?: () => void;
}) => {
  const buttonContent = (
    <>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex gap-4 h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {title}
        {icon && <FontAwesomeIcon icon={icon} className="w-4 h-4" />}
      </span>
    </>
  );

  if (link) {
    return (
      <Link
        href={link}
        className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] ${className}`}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${className}`}
    >
      {buttonContent}
    </button>
  );
};

export default CustomButton;
