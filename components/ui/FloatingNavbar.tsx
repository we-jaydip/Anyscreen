"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

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
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Comment out or remove the scroll visibility logic
  /* useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;
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
  }); */

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: 0 /* Always visible */, opacity: 1 /* Always visible */ }}
        transition={{ duration: 0.2 }}
        className={cn("fixed top-5 inset-x-0 z-[5000] px-4", className)}
      >
        {/* Desktop Header - Keep exactly as is */}
        <div
          className="hidden md:flex mx-auto px-10 py-1 rounded-lg border border-black/10 shadow items-center justify-center space-x-4 max-w-fit md:min-w-[70vw] lg:min-w-fit"
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          <Link href="/">
            <img src="/as.png" alt="AnyScreen" className="h-12 w-auto mr-4 cursor-pointer" />
          </Link>

          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className="relative dark:text-neutral-50 flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}

          <Link
            href="http://bit.ly/4la0uA8"
            className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full flex items-center justify-center"
          >
            <span>Book a Demo</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </Link>
        </div>

        {/* Mobile/Tablet Header - Keep exactly as is */}
        <div className="md:hidden flex items-center justify-between px-4 py-1 rounded-xl shadow bg-[#111928]/75 backdrop-blur-lg border border-white/20">
          <Link href="/">
            <img src="/as.png" alt="AnyScreen" className="h-10 cursor-pointer" />
          </Link>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu - Keep exactly as is */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-[#111928]/90 backdrop-blur-lg rounded-lg py-1 px-4 flex flex-col space-y-3 text-white border border-white/20">
            {navItems.map((navItem, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={navItem.link}
                className="text-sm hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                {navItem.name}
              </Link>
            ))}

            <Link
              href="http://bit.ly/4la0uA8"
              className="mt-2 text-sm text-white bg-blue-600 px-4 py-1 rounded-full w-full text-center"
              onClick={() => setMenuOpen(false)}
            > 
              Book a Demo
            </Link>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};