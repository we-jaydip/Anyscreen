"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden font-sans">
      <div className="max-w-7xl w-full">
        
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
           </div>
      <Footer />
    </main>
  );
};

export default Home;
