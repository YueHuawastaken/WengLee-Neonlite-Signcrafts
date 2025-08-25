
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-[#002244]/90 via-[#002244]/70 to-transparent absolute z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1551522435-a13afa10f103?w=1920&h=1080&fit=crop"
          alt="LED videowall installation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-6">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-[#00FFFF]/20 backdrop-blur-sm rounded-full text-[#00FFFF] text-sm font-medium mb-4">
            Illuminating Singapore Since 1969
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Premium LED, Neon &<br />
          <span className="text-[#00FFFF]">Signage Solutions</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto">
          From dynamic LED videowalls to custom neon artistry, we craft illuminated experiences 
          that captivate and convert for Singapore's leading brands.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to={createPageUrl("Projects")}>
            <Button size="lg" className="bg-[#00FFFF] text-[#002244] hover:bg-[#00FFFF]/90 font-semibold px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-[#00FFFF]/25 transition-all duration-300 group">
              View Our Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Link to={createPageUrl("Contact")}>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#002244] font-semibold px-8 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300">
              Get Free Quote
            </Button>
          </Link>
        </div>

        {/* Trust Signal */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 text-center">
            <div className="text-3xl font-bold text-[#00FFFF] mb-1">500+</div>
            <div className="text-sm text-gray-300">Projects Completed</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
