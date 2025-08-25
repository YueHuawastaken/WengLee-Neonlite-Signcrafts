import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, ExternalLink } from "lucide-react";
import WilkieEdgeLEDVideowall from "@/assets/6.jpg";
import DHLLED from "@/assets/Ledsign1.jpg";
import GoldbelFacadeLighting from "@/assets/goldbel1.jpg";
import OrchardFacadeSticker from "@/assets/orchardsticker.jpeg";

const featuredProjects = [
  {
    id: 1,
    title: "Wilkie Edge LED Videowall",
    category: "LED Videowalls",
    image: WilkieEdgeLEDVideowall,
    description: "Stunning 100sqm curved LED display creating immersive brand experiences"
  },
  {
    id: 2,
    title: "DHL LED Signage",
    category: "LED Signage",
    image: DHLLED,
    description: "Durable, high-brightness LED display built for DHL's fast-paced logistics environment"
  },
  {
    id: 3,
    title: "Orchard Gateway Facade Sticker",
    category: "Facade Sticker",
    image: OrchardFacadeSticker,
    description: "Illuminated channel letters enhancing corporate identity and visibility"
  },
  {
    id: 4,
    title: "Goldbel Facade Lighting",
    category: "Facade Lighting",
    image: GoldbelFacadeLighting,
    description: "Energy-efficient ambient lighting creating premium retail atmosphere"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002244] mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've transformed spaces and elevated brands across Singapore 
            with our innovative signage solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#00FFFF] text-[#002244] px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-[#002244]" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#002244] mb-2 group-hover:text-[#00FFFF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to={createPageUrl("Projects")}>
            <Button size="lg" className="bg-[#00FFFF] text-[#002244] hover:bg-[#00FFFF]/90 font-semibold px-8 py-4 rounded-xl shadow-lg group">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}