import React from "react";
import { FlipWords } from "../ui/flip-words";

export function AboutFlipWords() {
  const words = ["Designers", "Developers", "Marketers", "Experts", "Experienced"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-5xl mx-auto font-bold text-neutral-300 dark:text-neutral-300">
        We are a Team of 
        <FlipWords words={words} /> <br />
        </div>
    </div>
  );
}
