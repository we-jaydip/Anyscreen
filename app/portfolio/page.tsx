"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Footer from "@/components/Footer";

/* ==================== PROJECT CATEGORIES DATA ==================== */
// Define all project categories with their respective projects
// Each project has: title, subtitle, image, and clickable link
const projectCategories = [
  {
    name: "All", // Show all projects from all categories
    projects: [] as Array<{
      title: string;
      subtitle: string;
      img: string;
      link: string;
    }>, // Will be populated dynamically
  },
  {
    name: "Landing Pages",
    projects: [
      { 
        title: "Stockvista", 
        subtitle: "Financial Landing Page", 
        img: "/stockvista.png", 
        link: "https://stockvista.in" 
      },
      { 
        title: "Filtered Finance", 
        subtitle: "Finance Landing Page", 
        img: "/ff-website-ss.png", 
        link: "https://filteredfinance.in/" 
      },
      { 
        title: "Officebing", 
        subtitle: "Business Landing Page", 
        img: "/officebing.png", 
        link: "https://officebing.com/" 
      },
      { 
        title: "Memoriez Photography", 
        subtitle: "Photography Landing Page", 
        img: "/memoriezp-photography.png", 
        link: "https://memoriezphotography.in/" 
      },
    ],
  },
  {
    name: "Branding",
    projects: [
      { 
        title: "Cemtics", 
        subtitle: "Corporate Branding", 
        img: "/cemtics.png", 
        link: "https://cemtics.com" 
      },
      { 
        title: "SeoWood Hospital", 
        subtitle: "Healthcare Branding", 
        img: "/seawoods.png", 
        link: "https://seawoodshospital.com/" 
      },
      { 
        title: "AKTASSOCIATES", 
        subtitle: "Professional Services Branding", 
        img: "/akt-web-ss.png", 
        link: "https://aktassociates.com/" 
      },
      { 
        title: "Golden Bells Academy", 
        subtitle: "Education Branding", 
        img: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png", 
        link: "https://goldenbellsacademy.com" 
      },
    ],
  },
  {
    name: "SASS Websites",
    projects: [
      { 
        title: "Pixel Perfect", 
        subtitle: "Design SASS Platform", 
        img: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png", 
        link: "https://app.pixelperfect.quest" 
      },
      { 
        title: "SmartBridge", 
        subtitle: "Technology SASS", 
        img: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png", 
        link: "https://smartbridgetech.com" 
      },
      { 
        title: "Renderwork Studio", 
        subtitle: "Creative SASS Platform", 
        img: "https://aceternity.com/images/products/thumbnails/new/renderwork.png", 
        link: "https://renderwork.studio" 
      },
      { 
        title: "Invoker Labs", 
        subtitle: "Development SASS", 
        img: "https://aceternity.com/images/products/thumbnails/new/invoker.png", 
        link: "https://invoker.lol" 
      },
    ],
  },
];

// Populate "All" category with all projects from other categories
const allCategory = projectCategories.find(cat => cat.name === "All");
if (allCategory) {
  allCategory.projects = projectCategories
    .filter(cat => cat.name !== "All")
    .flatMap(cat => cat.projects);
}

/* ==================== PORTFOLIO CARDS COMPONENT ==================== */
const PortfolioCards = () => {
  // State to track which tab/category is currently active
  const [activeTab, setActiveTab] = useState("All");
  
  // FIXED: Handle potential undefined return from .find() - TypeScript safe
  const activeCategory = projectCategories.find(cat => cat.name === activeTab);
  const activeProjects = activeCategory?.projects ?? [];

  // Animation variants for smooth transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1 // Animate children with 0.1s delay between each
      } 
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 }, // Start invisible and slightly below
    visible: { opacity: 1, y: 0 },  // End visible and in position
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Section Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white">
        Some of our finest work.
      </h2>

      {/* Category Tabs */}
      <div className="flex justify-center mb-12 space-x-4 sm:space-x-6 flex-wrap gap-y-4">
        {projectCategories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveTab(cat.name)}
            className={`px-4 py-2 rounded-full font-semibold text-sm sm:text-base transition duration-200 ${
              activeTab === cat.name
                ? "bg-[#0439EB] text-white shadow-lg" // Active tab styling
                : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white" // Inactive tab styling
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <motion.div
        key={activeTab} // Force re-mount animation when tab changes
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {activeProjects.map((project) => (
            <motion.a
              key={project.title + project.link} // Unique key for each project
              href={project.link}
              target="_blank" // Open in new tab
              rel="noopener noreferrer" // Security best practice
              variants={cardVariants}
              whileHover={{ scale: 1.05 }} // Gentle scale up on hover
              transition={{ type: "spring", stiffness: 300 }} // Smooth spring animation
              className="bg-white/10 rounded-xl shadow-xl overflow-hidden border border-gray-800 flex flex-col cursor-pointer group"
            >
              {/* Project Image */}
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  loading="lazy" // Performance optimization
                  draggable={false} // Prevent image dragging
                />
              </div>

              {/* Project Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#0439EB] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.subtitle}</p>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

/* ==================== HERO PARALLAX DATA ==================== */
// Your existing project data for the HeroParallax component
const projectData = {
  products: [
    { title: "Stockvista", link: "https://stockvista.in", thumbnail: "/stockvista.png" },
    { title: "Cemtics", link: "https://cemtics.com", thumbnail: "/cemtics.png" },
    { title: "Officebing", link: "https://officebing.com/", thumbnail: "/officebing.png" },
    { title: "SeoWood Hospital", link: "https://seawoodshospital.com/", thumbnail: "/seawoods.png" },
    { title: "Filtered Finance", link: "https://filteredfinance.in/", thumbnail: "/ff-website-ss.png" },
    { title: "Pixel Perfect", link: "https://app.pixelperfect.quest", thumbnail: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png" },
    { title: "Filtered Finance", link: "https://filteredfinance.in/", thumbnail: "/ffwebsitess.png" },
    { title: "Memoriez Photography", link: "https://memoriezphotography.in/", thumbnail: "/memoriezp-photography.png" },
    { title: "Officebing", link: "https://officebing.com/", thumbnail: "/office-web-ss.png" },
    { title: "SmartBridge", link: "https://smartbridgetech.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png" },
    { title: "Renderwork Studio", link: "https://renderwork.studio", thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png" },
    { title: "Creme Digital", link: "https://cremedigital.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/cremedigital.png" },
    { title: "Golden Bells Academy", link: "https://goldenbellsacademy.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png" },
    { title: "Invoker Labs", link: "https://invoker.lol", thumbnail: "https://aceternity.com/images/products/thumbnails/new/invoker.png" },
    { title: "AKTASSOCIATES", link: "https://aktassociates.com/", thumbnail: "/akt-web-ss.png" },
    { title: "AKTASSOCIATES", link: "https://aktassociates.com/", thumbnail: "/akt-web-ss.png" },
    { title: "Invoker Labs", link: "https://invoker.lol", thumbnail: "https://aceternity.com/images/products/thumbnails/new/invoker.png" },
  ],
};

/* ==================== MAIN PORTFOLIO PAGE COMPONENT ==================== */
const ProjectPage = () => (
  <div className="min-h-screen w-full overflow-x-hidden bg-[#000319] flex flex-col">
    {/* Hero Parallax Section - Animated project showcase */}
    <HeroParallax products={projectData.products} />

    {/* Tabbed Portfolio Cards Section - NEW ADDITION */}
    {/* This section appears between HeroParallax and MacbookScroll */}
    <PortfolioCards />

    {/* Macbook Scroll Section - Interactive scroll animation */}
    <section className="relative w-full max-w-7xl h-[400vh] mx-auto pb-20 ">
      <MacbookScroll />
    </section>

    {/* Footer Section */}
    <Footer />
  </div>
);

export default ProjectPage;
