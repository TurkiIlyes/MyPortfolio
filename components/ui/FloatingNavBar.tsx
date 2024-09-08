"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // Set the visible state to true for the initial display of the nav bar in the hero section
  const [visible, setVisible] = useState(true);

  // Handle scroll event to update the visibility of the nav bar based on scroll direction
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;

      // Show the nav bar when near the top or scrolling up
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  // Adjust the scroll offset for links to account for the fixed nav bar height
  useEffect(() => {
    const handleLinkClick = (e: Event) => {
      e.preventDefault();

      // Ensure the event target is an anchor element
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const targetId = target.getAttribute("href")?.slice(1); // Get the target ID without the '#'
      const targetElement = document.getElementById(targetId!);

      if (targetElement) {
        const navHeight = document.querySelector(".fixed")?.clientHeight || 0; // Adjust based on the nav bar's actual class

        // Smooth scroll to the element with adjustment for the nav height
        window.scrollTo({
          top: targetElement.offsetTop - navHeight,
          behavior: "smooth",
        });
      }
    };

    // Select all anchor elements with href starting with '#'
    const anchors =
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    anchors.forEach((anchor) =>
      anchor.addEventListener("click", handleLinkClick)
    );

    // Cleanup function to remove event listeners
    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleLinkClick)
      );
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-40 top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/[.1] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
