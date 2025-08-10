"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function AboutHoverTextChange() {
  return (
    <div className="flex h-[20rem] w-full items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-6xl text-center text-4xl font-bold text-slate-800 dark:text-black">
            Every brand has a story. We help you tell it loud and clear.Innovation is our habit. Impact is our goal.
          </p>
        }
        className="h-[40rem] rounded-md border text-black dark:text-white"
      >
        From mobile to desktop, if it has a{" "}
        <span className="text-blue-500">Screen.</span> it has your brand, powered by
        <span className="text-blue-500"> AnyScreen.</span>.
      </MaskContainer>
    </div>
  );
}
