import React from "react";
import { Award, Users, Clock, CheckCircle } from "lucide-react";

const trustMetrics = [
  {
    icon: Clock,
    metric: "50+",
    label: "Years in Business",
    description: "Proudly serving Singapore since 1969"
  },
  {
    icon: CheckCircle,
    metric: "800+",
    label: "Projects Completed",
    description: "Successful installations across Singapore"
  },
  {
    icon: Users,
    metric: "1000+",
    label: "Happy Clients",
    description: "From SMEs to MNCs"
  },
  {
    icon: Award,
    metric: "99%",
    label: "Client Satisfaction",
    description: "Rated excellent by our customers"
  }
];

export default function TrustSignals() {
  return (
    <section className="py-24 bg-[#002244] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #00FFFF 0%, transparent 50%), radial-gradient(circle at 75% 75%, #00FFFF 0%, transparent 50%)'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Singapore's <span className="text-[#00FFFF]">Leading Brands</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five decades of excellence have earned us the trust of Singapore's most prestigious companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-20 h-20 bg-[#00FFFF]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00FFFF]/20 transition-colors">
                <metric.icon className="w-10 h-10 text-[#00FFFF]" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-[#00FFFF] mb-2">
                {metric.metric}
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {metric.label}
              </div>
              <p className="text-gray-400 text-sm">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Client Logos Bar */}
        <div className="mt-16 pt-16 border-t border-gray-700">
          <p className="text-center text-gray-400 mb-8 text-sm uppercase tracking-wide">
            Trusted by Singapore's Leading Companies
          </p>
         
         
        </div>
      </div>
    </section>
  );
}