"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { SparklesPreview } from "@/components/ui/sparkels-with-text";
import { GlowingEffectWithText } from "@/components/ui/GlowingEffectWithText";
import { EvervaultCardContent } from "@/components/ui/ever-card-content";

import { TimelineDemo } from "@/components/ui/about-timeline";
import { AboutFlipWords } from "@/components/ui/AboutFlipWords";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const cardsData = [
    {
      category: "At our core, we believe every business deserves a website that's not just functional but unforgettable. Our team blends design, performance, and brand identity to create websites that tell your story and convert visitors into customers.",
      title: "Web Development that Reflects Your Brand",
      src: "http://bit.ly/4la0uA8",
    },
    {
      category: "We help businesses go mobile with purpose-driven apps. Whether it's a startup MVP or a feature-rich enterprise app, we bring your vision to life with intuitive design, smooth performance, and scalable architecture—crafted for real-world impact.",
      title: "Turning Ideas into Apps",
      src: "http://bit.ly/4la0uA8",
    },
    {
      category: "We're more than just marketers—we're storytellers, strategists, and growth partners. Through digital campaigns, SEO, content, and social media, we connect your brand with the right audience, building trust and driving measurable results.",
      title: "Marketing That Moves People",
      src: "http://bit.ly/4la0uA8",
    }
  ];

  return (
    <main className="relative bg-black-100 flex flex-col overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="h-screen w-full">
        <BackgroundBeamsWithCollision className="h-full w-full">
          <div className="flex items-center justify-center h-full px-4 md:px-8 lg:px-16">
              <AboutFlipWords />
          </div>
        </BackgroundBeamsWithCollision>
      </section>

      {/* Page Content */}
      <div className="w-full">
        <TimelineDemo />
        <GlowingEffectWithText />
        <SparklesPreview />
      </div>
      
      <Footer />
    </main>
  );
};

export default AboutPage;