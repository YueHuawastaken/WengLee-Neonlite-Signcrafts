
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { MessageSquare, Phone, ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#002244] via-[#003366] to-[#002244] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00FFFF] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00FFFF] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Have a Project <span className="text-[#00FFFF]">in Mind?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Let's illuminate your brand with custom signage that captivates and converts. 
            From concept to installation, we're your trusted signage partner.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-[#00FFFF] text-[#002244] hover:bg-[#00FFFF]/90 font-semibold px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-[#00FFFF]/25 transition-all duration-300 group">
                <MessageSquare className="mr-3 w-6 h-6" />
                Get Free Consultation
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <a href="tel:62880606" className="flex items-center">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#002244] font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300">
                <Phone className="mr-3 w-6 h-6" />
                Call Now: 6288 0606
              </Button>
            </a>
          </div>

          {/* Quick Contact Info */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-[#00FFFF] font-semibold mb-1">Response Time</div>
                <div className="text-white text-sm">Within 24 hours</div>
              </div>
              <div>
                <div className="text-[#00FFFF] font-semibold mb-1">Free Consultation</div>
                <div className="text-white text-sm">No obligation quote</div>
              </div>
              <div>
                <div className="text-[#00FFFF] font-semibold mb-1">Expert Advice</div>
                <div className="text-white text-sm">50+ years experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
