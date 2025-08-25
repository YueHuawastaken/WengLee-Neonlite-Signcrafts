

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  
  const navigationItems = [
    { name: "Home", path: createPageUrl("Home") },
    { name: "Services", path: createPageUrl("Services") },
    { name: "Projects", path: createPageUrl("Projects") },
    { name: "About", path: createPageUrl("About") },
    { name: "Contact", path: createPageUrl("Contact") },
    { name: "Schedule a Visit", path: createPageUrl("ScheduleVisit") }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#002244] to-[#00FFFF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">WL</span>
              </div>
              <div>
                <div className="font-semibold text-[#002244] text-lg leading-tight">Weng Lee</div>
                <div className="text-xs text-gray-600 leading-tight">Neonlite & Signcrafts</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "text-[#00FFFF] border-b-2 border-[#00FFFF] pb-1"
                      : "text-[#002244] hover:text-[#00FFFF]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Link to={createPageUrl("Contact")} className="hidden md:block">
              <Button className="bg-[#00FFFF] text-[#002244] hover:bg-[#00FFFF]/90 font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Get Free Quote
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-[#002244]"></div>
                <div className="w-full h-0.5 bg-[#002244]"></div>
                <div className="w-full h-0.5 bg-[#002244]"></div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#002244] text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              {/* Footer Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-white to-[#00FFFF] rounded-lg flex items-center justify-center">
                  <span className="text-[#002244] font-bold text-lg">WL</span>
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">Weng Lee</div>
                  <div className="text-xs text-gray-300">Neonlite & Signcrafts Pte Ltd</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Illuminating Singapore for over 50 years with premium LED, neon, and custom signage solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/WLNEON" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00FFFF]/20 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-[#00FFFF]">Quick Links</h3>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-[#00FFFF] transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4 text-[#00FFFF]">Our Services</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-300">LED Signs & Videowalls</li>
                <li className="text-gray-300">Custom Neon Signs</li>
                <li className="text-gray-300">Channel Letter Signs</li>
                <li className="text-gray-300">Cold Cathode Lighting</li>
                <li className="text-gray-300">Lightbox Displays</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4 text-[#00FFFF]">Contact Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#00FFFF]" />
                  <a href="tel:62880606" className="text-gray-300 hover:text-white">6288 0606</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#00FFFF]" />
                  <a href="mailto:EDY@WLNEON.COM" className="text-gray-300 hover:text-white">EDY@WLNEON.COM</a>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#00FFFF] mt-0.5" />
                  <span className="text-gray-300">
                    63 Hillview Ave #03-12<br />
                    Singapore 669569
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Weng Lee Neonlite & Signcrafts Pte Ltd. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Proudly serving Singapore since 1969
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

