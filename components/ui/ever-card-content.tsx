import React from "react";
import { EvervaultCard, Icon } from "../ui/evervault-card";

export function EvervaultCardContent() {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-5xl mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard text="Why Anyscreen" className="text-10px font-bold text-gray-900 mb-1"  />

      <h2 className="dark:text-white text-black mt-4 text-sm font-light">
        Because your brand deserves bold ideas, sharp design, clean code, and marketing that actually works.
      </h2>
      {/* <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
        Watch me hover
      </p> */}
    </div>
  );
}
