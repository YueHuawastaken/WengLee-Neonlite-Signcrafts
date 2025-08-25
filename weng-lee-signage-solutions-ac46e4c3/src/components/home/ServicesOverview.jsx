import React from "react";
import { Monitor, Zap, PenTool, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const services = [
  {
    icon: Monitor,
    title: "LED Signs & Videowalls",
    description: "Dynamic, eye-catching digital displays for advertising and branding that capture attention and drive engagement.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Neon Signs",
    description: "Classic, vibrant custom neon art for interiors and exteriors that brings timeless elegance to any space.",
    color: "from-pink-500 to-purple-500"
  },
  {
    icon: PenTool,
    title: "Custom Signage",
    description: "Durable and creative signs from channel letters to lightboxes, tailored to your brand's unique identity.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Lightbulb,
    title: "Cold Cathode Lighting",
    description: "Elegant, energy-efficient ambient lighting for architectural features that creates stunning visual impact.",
    color: "from-orange-500 to-yellow-500"
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002244] mb-6">
            Our Signage Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Five decades of innovation in illuminated signage, serving Singapore's most 
            prestigious brands with cutting-edge LED technology and artisanal neon craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#002244] mb-4 group-hover:text-[#00FFFF] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center text-[#00FFFF] font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to={createPageUrl("Services")}>
            <Button size="lg" className="bg-[#002244] hover:bg-[#002244]/90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}