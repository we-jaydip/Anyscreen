"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { MultiStepLoader } from "./multi-step-loader";

export function ThreeDText() {
  const images = [
    "/stockvista.png",
    "/cemtics.png",
    "/officebing.png",
    "/seawoods.png",
    "/ff-website-ss.png",
    "/stockvista.png",
    "/memoriezp-photography.png",
    "/office-web-ss.png",
    "/akt-web-ss.png",
    "/stockvista.png",
    "/cemtics.png",
    "/officebing.png",
    "/seawoods.png",
    "/ff-website-ss.png",
    "/ffwebsitess.png",
    "/memoriezp-photography.png",
    "/office-web-ss.png",
    "/akt-web-ss.png",
    "/ffwebsitess.png",
    "/cemtics.png",
    "/officebing.png",
    "/seawoods.png",
    "/ff-website-ss.png",
    "/ffwebsitess.png",
    "/memoriezp-photography.png",
    "/office-web-ss.png",
    "/akt-web-ss.png",
    "/officebing.png",
    "/seawoods.png",
    "/ff-website-ss.png",
    "/ffwebsitess.png",
    "/memoriezp-photography.png",
    "/office-web-ss.png",
    "/akt-web-ss.png",
    "/ffwebsitess.png",
    "/cemtics.png",
    "/officebing.png",
    "/seawoods.png",
    "/ff-website-ss.png",
    "/ffwebsitess.png",
    "/memoriezp-photography.png",
    "/office-web-ss.png",
    "/akt-web-ss.png",
  ];

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#000319]">

      <div className="absolute inset-0 z-10 bg-black/80" />
      <ThreeDMarquee
        className="absolute inset-0 w-full h-full pointer-events-none"
        images={images}
      />
      <div className="relative z-20 text-center text-white px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          Build Your Digital Success Story{" "}
          {/* <span className="inline-block rounded-xl px-4 py-1 text-white  backdrop-blur-sm">
            AnyScreen
          </span>{" "} */}
          
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto text-neutral-200">
         From startups to bold brands, we craft websites and digital experiences that look great on any screen and help your business grow.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="http://bit.ly/4la0uA8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative rounded-full border border-white/20 bg-[#000319]/50 backdrop-blur-md px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#000319]/60 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:outline-none hover:shadow-sm">
  Connect Now
</button>

          </a>
          {/* Replace this with your loader button */}
         <MultiStepLoader
  loadingStates={[
    { text: "Analyzing Requirements" },
    { text: "Designing Solution" },
    { text: "Building Platform" },
    { text: "Deploying Online" },
  ]}
  duration={2000}
/>  
        </div>
      </div>
    </div>
  );
}
