"use client";

import React from "react";
import Footer from "@/components/Footer";
import { ThreeDText } from "@/components/ui/3d-marquee-with-text";
import CardDemo3 from "@/components/cards-demo-3";
import ServApp from "@/components/services-cards/app";
import { motion } from "framer-motion";
import ServWeb from "@/components/services-cards/web";
import ServMarketing from "@/components/services-cards/marketing";

const servicesData = [
  {
    title: "Web Development",
    description: "Building modern websites using the latest technologies.",
    icon: "💻",
  },
  {
    title: "Mobile App Development",
    description: "Creating apps for Android & iOS to boost engagement.",
    icon: "📱",
  },
  {
    title: "Digital Marketing",
    description: "Growing your online presence with targeted strategies.",
    icon: "📈",
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive designs with a focus on experience.",
    icon: "🎨",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure for business operations.",
    icon: "☁️",
  },
  {
    title: "AI Automation",
    description: "Streamline operations with intelligent automation solutions that reduce costs and boost efficiency.",
    icon: "🤖",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#000319] text-white font-sans">
      {/* Hero Section */}

      <ThreeDText />

      

      {/* Services Grid */}
      <div className="w-full px-4 md:px-12 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#0a0f2a] text-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
