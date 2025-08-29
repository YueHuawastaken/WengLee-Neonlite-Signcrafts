import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesOverview from "../components/home/ServicesOverview";
import TrustSignals from "../components/home/TrustSignals";
import FeaturedProjects from "../components/home/FeaturedProjects";
import CallToAction from "../components/home/CallToAction";
import SEO from '@/components/seo.jsx';

export default function Home() {
  return (
    <>
     <SEO 
      title="Premium Signage Solutions Singapore | LED Video Walls & Neon Signs"
      description="Weng Lee: Singapore's leading signage company since 1969. Custom LED video walls, neon signs, and commercial signage solutions. Get free quote today."
    />
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <TrustSignals />
      <FeaturedProjects />
      <CallToAction />
    </div>
    </>
  );
}