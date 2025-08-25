import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, ExternalLink } from "lucide-react";

const featuredProjects = [
  {
    id: 1,
    title: "Marina Bay LED Videowall",
    category: "LED Videowalls",
    image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=600&h=400&fit=crop",
    description: "Stunning 50-meter curved LED display creating immersive brand experiences"
  },
  {
    id: 2,
    title: "Artisanal Neon Restaurant",
    category: "Custom Neon",
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=600&h=400&fit=crop",
    description: "Bespoke neon signage bringing vintage charm to modern dining"
  },
  {
    id: 3,
    title: "Corporate Channel Letters",
    category: "Channel Letters",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&h=400&fit=crop",
    description: "Illuminated channel letters enhancing corporate identity and visibility"
  },
  {
    id: 4,
    title: "Retail Cold Cathode Lighting",
    category: "Cold Cathode",
    image: "https://images.unsplash.com/photo-1555992336-03a23c327c04?w=600&h=400&fit=crop",
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