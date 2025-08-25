import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesOverview from "../components/home/ServicesOverview";
import TrustSignals from "../components/home/TrustSignals";
import FeaturedProjects from "../components/home/FeaturedProjects";
import CallToAction from "../components/home/CallToAction";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <TrustSignals />
      <FeaturedProjects />
      <CallToAction />
    </div>
  );
}