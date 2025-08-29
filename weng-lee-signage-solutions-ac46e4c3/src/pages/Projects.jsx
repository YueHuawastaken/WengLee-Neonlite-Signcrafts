import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Filter } from "lucide-react";
import featuredLEDvideowall from "@/assets/6.jpg";
import Neonsign from "@/assets/neonsign.jpg";
import signage from "@/assets/Ledsign1.jpg";
import facadelight from "@/assets/neonlight.jpg";
import LEDvideowall1 from "@/assets/7.jpg";
import PE7 from "@/assets/pe7.jpg";
import ledvideo from "@/assets/5.jpg";
import ledvideosm from "@/assets/4.jpg";
import ledvideolarge from "@/assets/3.jpg";
import SEO from '@/components/seo.jsx';

const projects = [
  {
    id: 1,
    title: "LED Video Wall",
    category: "LED & Videowall",
    image: featuredLEDvideowall,
    description: "Stunning 100sqm curved LED display creating immersive brand experiences.",
    client: "" ,
    year: "",
    size: "",
    featured: true
  },
  {
    id: 2,
    title: "Heritage Neon Restaurant Signage",
    category: "Neon",
    image: Neonsign,
    description: "Artisanal neon signage bringing vintage charm to Culture Club",
    client: "",
    year: "",
    size: "",
    featured: true
  },
  {
    id: 3,
    title: "DHL Signage",
    category: "Signage",
    image: signage,
    description: "Illuminated channel letters enhancing corporate identity and visibility for multinational delivery company.",
    client: "",
    year: "",
    size: "",
    featured: true
  },
  {
    id: 4,
    title: "Luxury Hotel Facade Lighting",
    category: "Facade Lighting",
    image: facadelight,
    description: "Energy-efficient ambient lighting creating premium hotel atmosphere for high-end fashion boutique.",
    client: "",
    year: "",
    size: "",
    featured: false
  },
  {
    id: 5,
    title: "LED VideoWall Movie Displays",
    category: "LED & Videowall",
    image: LEDvideowall1,
    description: "High-resolution LED displays providing smooth experience for viewers",
    client: "",
    year: "",
    size: "",
    featured: true
  },
  {
    id: 6,
    title: "MNC's Neon Art Installation",
    category: "Neon",
    image: PE7,
    description: "Trusted by branded companies 7UP & Pepsi",
    client: "",
    year: "",
    size: "",
    featured: false
  },
   {
    id: 7,
    title: "LED VideoWall T Junction",
    category: "LED & Videowall",
    image: ledvideo ,
    description: "High Traffic Installation for greater brand Visibility",
    client: "",
    year: "",
    size: "",
    featured: true
  },
   {
    id: 8,
    title: "LED VideoWall Shopping Mall",
    category: "LED & Videowall",
    image: ledvideosm ,
    description: "Shopping Mall Installation",
    client: "",
    year: "",
    size: "",
    featured: true
  },
  {
    id: 9,
    title: "Large LED VideoWall installation",
    category: "LED & Videowall",
    image: ledvideolarge ,
    description: "Large Videowall Installation",
    client: "",
    year: "",
    size: "",
    featured: true
  },
];

const categories = ["All", "LED & Videowall", "Neon", "Signage", "Facade Lighting"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
     <>
      {/* Add SEO component here */}
      <SEO 
        title="Our Signage Projects Portfolio | LED Video Walls & Neon Signs Singapore"
        description="View our portfolio of 200+ successful signage projects in Singapore. LED video walls, custom neon signs, facade lighting, and commercial signage installations since 1969."
      />
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
        <div className="container mx-auto px-6">
  <div className="text-center mt-20">
    <div className="bg-gradient-to-r from-[#002244]/10 to-[#00FFFF]/10 p-8 rounded-2xl border-2 border-[#00FFFF]/20">
      <h3 className="text-2xl font-bold text-[#002244] mb-2">
        Our Prestigious Project Portfolio
      </h3>
      <p className="text-lg text-gray-700 mb-6">
        With over 50 years of excellence, we've illuminated Singapore's most iconic landmarks
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
        {/* Cold Cathode Projects */}
        <div className="bg-white/50 p-6 rounded-xl border border-[#00FFFF]/20">
          <h4 className="font-bold text-[#002244] mb-4 text-lg">🏢 Facade Lighting</h4>
          <div className="space-y-2 text-sm text-gray-700">
            {[
              "Bridges at Singapore River", "Capital Tower (2001)", "City Link at City Hall Underpass (2000)",
              "Gallery Hotel at Robertson Quay", "Goldbell Tower (1999)", "Kranji Turf Club Race Course (1999)",
              "Liang Court at River Valley (2001)", "National Library at Stamford Road", "Oasia Hotel (2011)",
              "One Shenton (2011)", "Robinson Centre at Robinson Road (2001)", "Scotts Square (2012)",
              "Sentosa Causeway Bridge", "Singapore Indoor Stadium (2001)", "Shangri-la Hotel & Horizon Fitness Centre",
              "The Heeren Shop (1994)", "The Ritz Carlton Millenia", "Traders Hotel", "Woodlands Checkpoint"
            ].map((project, index) => (
              <div key={index} className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[#00FFFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>{project}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Signage & Billboard Projects */}
        <div className="bg-white/50 p-6 rounded-xl border border-[#00FFFF]/20">
          <h4 className="font-bold text-[#002244] mb-4 text-lg">🪧 Signage & Video Walls</h4>
          <div className="space-y-2 text-sm text-gray-700">
            {[
              "Aik Hua Food Court at Sembawang", "Airport Fire Station 2 (2002)", "Bedok Community Library (2001)",
              "C & P Holding Pte Ltd", "Concorde Hotel (1993)", "CWT Limited (Multiple Projects)",
              "Esplanade - Theatres on The Bay (2002)", "Far East Plaza at Orchard (1982)", "Fuji Xerox Tower",
              "Golden Landmark Hotel (1989)", "HDB Neighbourhood Shopping Centers", "Hennessy & Johnnie Walker Islandwide",
              "HL Bank at Shenton Way (2000)", "Honda Center & Show Rooms", "IBM Tower at Tanjong Pagar (2001)",
              "JTC Changi South (1999)", "Lam Soon Industrial Building (2005)", "Marine Parade Community Centre",
              "Martell & Chivas Regal Islandwide", "OUB Centre Video Wall (2014)", "Raffles City and Sogo (1985)",
              "Singapore Power Building at Somerset (1999)", "Tiger Brewery Singapore", "Toys 'R' Us"
            ].map((project, index) => (
              <div key={index} className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[#00FFFF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>{project}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-[#002244]/5 rounded-xl border border-[#00FFFF]/20 max-w-4xl mx-auto">
        <h4 className="font-bold text-[#002244] mb-3">🌏 International Projects</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <span className="font-semibold text-[#002244]">Cold Cathode:</span>
            <div className="mt-1">Sheraton Hotel Labuan, Malaysia</div>
            <div>Sheraton Hotel Hanoi, Vietnam (1997)</div>
            <div>Traders Hotel Yangon, Myanmar</div>
          </div>
          <div>
            <span className="font-semibold text-[#002244]">Signage & Billboard:</span>
            <div className="mt-1">Fuji Film Billboard at Yangon, Myanmar</div>
            <div>Gan International Airport, Maldives (2005)</div>
            <div>Male International Airport, Maldives (2002)</div>
            <div>Sony Advertisement Signage, Myanmar/Vietnam</div>
          </div>
        </div>
      </div>

      <p className="text-gray-500 mt-6 text-sm">
        Over 200+ successful projects delivered since 1969
      </p>
    </div>
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
    </>
  );
}