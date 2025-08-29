
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Award, Users, CheckCircle, ArrowRight } from "lucide-react";
import neonlight from "@/assets/neonlight.jpg";

const timelineEvents = [
  {
    year: "1969",
    title: "Company Founded",
    description: "Weng Lee Neonlite & Signcrafts established in Singapore, beginning our journey in traditional neon signage."
  },
  {
    year: "1980",
    title: "Expansion & Innovation",
    description: "Expanded operations with cold cathode lighting solutions and began serving major commercial clients."
  },
  {
    year: "1995",
    title: "Digital Revolution",
    description: "Embraced LED technology and digital displays, becoming pioneers in Singapore's digital signage industry."
  },
  {
    year: "2010",
    title: "HD Videowalls",
    description: "Launched high-definition videowall solutions for premium retail and corporate environments."
  },
  {
    year: "2020",
    title: "Smart Integration",
    description: "Integrated IoT and smart city technologies into our signage solutions for next-generation experiences."
  },
  {
    year: "2024",
    title: "Sustainable Future",
    description: "Leading the industry with eco-friendly LED solutions and sustainable signage practices."
  }
];

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "Every sign we create meets the highest standards of quality and durability, backed by five decades of expertise."
  },
  {
    icon: Users,
    title: "Customer Excellence",
    description: "We build lasting relationships with our clients through exceptional service and dedicated support throughout every project."
  },
  {
    icon: CheckCircle,
    title: "Innovation Leadership",
    description: "Continuously evolving with the latest technologies to provide cutting-edge signage solutions for modern businesses."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002244] to-[#003366] text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-[#00FFFF]">Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Five decades of illuminating Singapore with premium signage solutions, 
              trusted by leading brands and built on a foundation of craftsmanship and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#002244] mb-6">
                Illuminating Singapore Since 1969
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  For over five decades, Weng Lee Neonlite & Signcrafts has been at the forefront 
                  of Singapore's signage industry. What started as a small neon shop in 1969 has evolved 
                  into one of the region's most trusted signage specialists.
                </p>
                <p>
                  We've witnessed and led the transformation of signage technology - from traditional 
                  hand-bent glass neon tubes to cutting-edge LED videowalls. Our commitment to 
                  craftsmanship, innovation, and client success has remained constant throughout this journey.
                </p>
                <p>
                  Today, we serve everyone from small local businesses to multinational corporations, 
                  government agencies, and iconic landmarks across Singapore. Each project represents 
                  our dedication to illuminating brands and creating memorable experiences.
                </p>
              </div>
              <div className="mt-8">
                <Link to={createPageUrl("Projects")}>
                  <Button size="lg" className="bg-[#00FFFF] text-[#002244] hover:bg-[#00FFFF]/90 font-semibold px-8 py-4 rounded-xl group">
                    View Our Work
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
             <img
  src={neonlight} // 2. Changed this line - use curly braces
  alt="Craftsman working on neon sign at Weng Lee Neon"
  className="rounded-2xl shadow-2xl"
/>
              <div className="absolute -bottom-6 -left-6 bg-[#00FFFF] text-[#002244] p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm font-semibold">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#002244] mb-16 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#00FFFF]"></div>
              
              {timelineEvents.map((event, index) => (
                <div key={event.year} className="relative mb-12 last:mb-0">
                  <div className="flex items-start">
                    {/* Year Marker */}
                    <div className="relative z-10 w-16 h-16 bg-[#00FFFF] rounded-full flex items-center justify-center text-[#002244] font-bold text-sm mr-8">
                      {event.year}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg">
                      <h3 className="text-xl font-bold text-[#002244] mb-2">{event.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002244] mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our relationships with clients, 
              partners, and the communities we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#00FFFF] to-[#002244] rounded-2xl p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#002244] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
     
               
             
       

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#002244] mb-6">
            Ready to Work With <span className="text-[#00FFFF]">Singapore's</span><br />
            Most Trusted Signage Partner?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our five decades of expertise can illuminate your brand 
            and create memorable experiences for your customers.
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button size="lg" className="bg-[#00FFFF] text-[#002244] hover:bg-[#00FFFF]/90 font-semibold px-8 py-4 rounded-xl shadow-lg">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
