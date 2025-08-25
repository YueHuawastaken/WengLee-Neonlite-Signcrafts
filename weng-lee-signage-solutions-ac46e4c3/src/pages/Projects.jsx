import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Filter } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Marina Bay Shopping Center LED Wall",
    category: "LED & Videowall",
    image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=600&h=400&fit=crop",
    description: "Stunning 50-meter curved LED display creating immersive brand experiences for premium retail environment.",
    client: "Marina Bay Development",
    year: "2024",
    size: "50m x 8m",
    featured: true
  },
  {
    id: 2,
    title: "Heritage Neon Restaurant Signage",
    category: "Neon",
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=600&h=400&fit=crop",
    description: "Artisanal neon signage bringing vintage charm to modern dining experience in Chinatown heritage district.",
    client: "Old Shanghai Restaurant",
    year: "2024",
    size: "Custom fabrication",
    featured: true
  },
  {
    id: 3,
    title: "Corporate Headquarters Channel Letters",
    category: "Signage",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&h=400&fit=crop",
    description: "Illuminated channel letters enhancing corporate identity and visibility for multinational technology company.",
    client: "TechCorp Asia",
    year: "2023",
    size: "15m building facade",
    featured: true
  },
  {
    id: 4,
    title: "Luxury Retail Cold Cathode Lighting",
    category: "Cold Cathode",
    image: "https://images.unsplash.com/photo-1555992336-03a23c327c04?w=600&h=400&fit=crop",
    description: "Energy-efficient ambient lighting creating premium retail atmosphere for high-end fashion boutique.",
    client: "Luxury Fashion House",
    year: "2023",
    size: "2000 sqm retail space",
    featured: false
  },
  {
    id: 5,
    title: "Airport Terminal LED Information Displays",
    category: "LED & Videowall",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    description: "High-resolution LED displays providing real-time flight information and wayfinding for international terminal.",
    client: "Changi Airport Group",
    year: "2023",
    size: "Multiple installations",
    featured: true
  },
  {
    id: 6,
    title: "Boutique Hotel Neon Art Installation",
    category: "Neon",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&h=400&fit=crop",
    description: "Custom neon art installation creating memorable brand experience for boutique hotel lobby and bar area.",
    client: "The Heritage Hotel",
    year: "2024",
    size: "Lobby & bar installation",
    featured: false
  }
];

const categories = ["All", "LED & Videowall", "Neon", "Signage", "Cold Cathode"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002244] to-[#003366] text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-[#00FFFF]">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Discover how we've transformed spaces and elevated brands across Singapore 
              with our innovative signage solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-gray-700">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category 
                    ? "bg-[#00FFFF] text-[#002244] hover:bg-[#00FFFF]/90" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {selectedCategory === "All" && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#002244] mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredProjects.slice(0, 3).map((project) => (
                <div
                  key={project.id}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#00FFFF] text-[#002244] font-medium">
                        {project.category}
                      </Badge>
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
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{project.client}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-[#002244]">
              {selectedCategory === "All" ? "All Projects" : selectedCategory + " Projects"}
            </h2>
            <span className="text-gray-500">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#00FFFF] text-[#002244] font-medium">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-[#002244]" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#002244] mb-2 group-hover:text-[#00FFFF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal/Overlay would go here */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-80 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                ×
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-[#00FFFF] text-[#002244]">
                  {selectedProject.category}
                </Badge>
                <span className="text-gray-500">{selectedProject.year}</span>
              </div>
              <h2 className="text-3xl font-bold text-[#002244] mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-[#002244]">Client: </span>
                  <span className="text-gray-600">{selectedProject.client}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#002244]">Size: </span>
                  <span className="text-gray-600">{selectedProject.size}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}