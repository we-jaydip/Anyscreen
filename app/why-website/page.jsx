"use client";

import RoadmapTabs from '@/components/RoadmapTabs';
import FomoCarousel from '@/components/FomoCarousel';
import FomoMarquee from '@/components/FomoMarquee';
import CTASection from '@/components/CTASection';
import Footer from "@/components/Footer";
import TestimonialCarousel from '@/components/TestimonialCarousel';
import StatsSection from '@/components/StatsSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import HeroAnimatedSection from '@/components/HeroAnimatedSection';

export default function WhyWebsite() {
    return (
        <main className="relative bg-[#000319] text-white flex flex-col overflow-hidden">
            {/* Hero Section */}
            <HeroAnimatedSection />

            {/* Full-Width Content Sections */}
            <div className="w-full space-y-8">
                <RoadmapTabs />
                <StatsSection />
                <BeforeAfterSection />
                <FomoCarousel />
                <TestimonialCarousel />
                <FomoMarquee />
                <CTASection />
            </div>

            {/* Footer */}
            <Footer />
        </main>
    );
}
