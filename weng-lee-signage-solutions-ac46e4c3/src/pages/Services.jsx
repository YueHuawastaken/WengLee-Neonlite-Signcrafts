import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Monitor, Zap, PenTool, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";
import Ledvideowall from "@/assets/3.jpg";
import Neonsign1 from "@/assets/neonsign1.png";
import sony from "@/assets/sony4.jpg";
import gen from "@/assets/gen.jpg";

const services = [
  {
    id: "led-videowalls",
    icon: Monitor,
    title: "LED Signs & Videowalls",
    subtitle: "Dynamic Digital Displays",
    description: "Transform any space with our cutting-edge LED technology. From high-resolution videowalls to energy-efficient LED signage, we create dynamic displays that capture attention and drive engagement.",
    image: Ledvideowall,
    features: [
      "Ultra-high resolution displays up to 4K",
      "Indoor and outdoor weatherproof options",
      "Custom sizes and curved installations",
      "Remote content management systems",
      "Energy-efficient LED technology",
      "24/7 technical support and maintenance"
    ],
    applications: ["Shopping malls", "Corporate lobbies", "Retail stores", "Restaurants", "Event venues", "Transportation hubs"]
  },
  {
    id: "neon-signs",
    icon: Zap,
    title: "Custom Neon Signs",
    subtitle: "Artisanal Neon Craftsmanship",
    description: "Blend traditional neon artistry with modern LED neon technology. Our master craftsmen create stunning neon signs that bring timeless elegance and vibrant energy to any environment.",
    image: Neonsign1,
    features: [
      "Traditional glass tube neon artistry",
      "Modern LED neon alternatives",
      "Custom colors and animations",
      "Indoor and outdoor installations",
      "Dimming and color-changing options",
      "Heritage restoration services"
    ],
    applications: ["Restaurants & bars", "Retail storefronts", "Hotels & hospitality", "Corporate branding", "Art installations", "Wedding & events"]
  },
  {
    id: "custom-signage",
    icon: PenTool,
    title: "Custom Signage Solutions",
    subtitle: "Channel Letters & Lightboxes",
    description: "From channel letters to illuminated lightboxes, we design and fabricate custom signage that perfectly represents your brand identity and enhances visibility day and night.",
    image: sony,
    features: [
      "3D channel letter fabrication",
      "Illuminated and non-illuminated options",
      "Acrylic, metal, and composite materials",
      "Precision laser cutting and forming",
      "Weather-resistant coatings",
      "Professional installation services"
    ],
    applications: ["Corporate buildings", "Retail chains", "Medical centers", "Educational institutions", "Government facilities", "Industrial complexes"]
  },
  {
    id: "Facade-Lighting",
    icon: Lightbulb,
    title: "Facade Lighting",
    subtitle: "Architectural Accent Lighting",
    description: "Create stunning architectural features with our energy-efficient facade lighting systems. Perfect for accent lighting, cove lighting, and creating ambient atmospheres.",
    image: gen,
    features: [
      "Ultra-long lifespan (50,000+ hours)",
      "Minimal heat generation",
      "Uniform light distribution",
      "Dimmable and color-tunable options",
      "Easy maintenance and replacement",
      "Energy-efficient operation"
    ],
    applications: ["Luxury retail", "Hotels & resorts", "Corporate offices", "Museums & galleries", "Residential projects", "Architectural features"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002244] to-[#003366] text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professional <span className="text-[#00FFFF]">Signage Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Five decades of expertise in LED technology, neon artistry, and custom signage solutions 
              for Singapore's most prestigious brands.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          {services.map((service, index) => (
            <div key={service.id} className={`mb-24 ${index !== services.length - 1 ? 'border-b border-gray-100 pb-24' : ''}`}>
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00FFFF] to-[#002244] rounded-2xl p-4 mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-[#002244]">{service.title}</h2>
                      <p className="text-[#00FFFF] font-semibold">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#002244] mb-4">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#00FFFF] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#002244] mb-4">Ideal Applications</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((app, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to={createPageUrl("Contact")}>
                    <Button size="lg" className="bg-[#00FFFF] text-[#002244] hover:bg-[#00FFFF]/90 font-semibold px-8 py-4 rounded-xl shadow-lg group">
                      Get Quote for {service.title}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#002244] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Illuminate Your <span className="text-[#00FFFF]">Brand?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experts help you choose the perfect signage solution for your business needs.
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button size="lg" className="bg-[#00FFFF] text-[#002244] hover:bg-[#00FFFF]/90 font-semibold px-8 py-4 rounded-xl shadow-lg">
              Start Your Project Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}