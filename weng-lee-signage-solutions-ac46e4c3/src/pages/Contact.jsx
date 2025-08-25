
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const SuccessMessage = ({ message }) => (
  <div className="bg-[#4CAF50]/10 border border-[#4CAF50]/30 rounded-xl p-6 mb-8 flex items-center gap-4">
    <div className="w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center">
      <CheckCircle className="w-6 h-6 text-white" />
    </div>
    <div>
      <div className="font-semibold text-[#388E3C]">Success!</div>
      <div className="text-gray-600 text-sm">{message}</div>
    </div>
  </div>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000); // Hide success message after 5 seconds
      setFormData({ // Reset form data
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002244] to-[#003366] text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Let's <span className="text-[#00FFFF]">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Ready to illuminate your brand? Get in touch with Singapore's most trusted signage experts. 
              We're here to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#002244] mb-8">Get Your Free Quote</h2>
              
              {isSubmitted && (
                <SuccessMessage message="Thank you! Your message has been sent successfully. We'll get back to you within 24 business hours." />
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <Input
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+65 1234 5678"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service of Interest
                  </label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="led-videowall">LED & Videowall</SelectItem>
                      <SelectItem value="neon-sign">Neon Sign</SelectItem>
                      <SelectItem value="custom-signage">Custom Signage</SelectItem>
                      <SelectItem value="cold-cathode">Cold Cathode</SelectItem>
                      <SelectItem value="not-sure">Not Sure / Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                    className="h-32 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-[#00FFFF] text-[#002244] hover:bg-[#00FFFF]/90 font-semibold py-4 rounded-xl shadow-lg group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin w-5 h-5 border-2 border-[#002244]/30 border-t-[#002244] rounded-full"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </div>
                  )}
                </Button>
                <p className="text-center text-sm text-gray-500 mt-4">We'll get back to you within 24 business hours.</p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#002244] mb-8">Get in Touch</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Have questions about our services or want to discuss your project? 
                  Our team is ready to help you create stunning signage solutions.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00FFFF]/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#00FFFF]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#002244] mb-1">Phone</div>
                    <a href="tel:62880606" className="text-gray-600 hover:text-[#00FFFF] transition-colors">
                      6288 0606
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00FFFF]/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#00FFFF]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#002244] mb-1">Email</div>
                    <a href="mailto:EDY@WLNEON.COM" className="text-gray-600 hover:text-[#00FFFF] transition-colors">
                      EDY@WLNEON.COM
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00FFFF]/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#00FFFF]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#002244] mb-1">Address</div>
                    <div className="text-gray-600">
                      63 Hillview Ave #03-12<br />
                      Singapore 669569
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00FFFF]/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#00FFFF]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#002244] mb-1">Business Hours</div>
                    <div className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday & PH: Closed
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Promise */}
              <div className="bg-gradient-to-br from-[#00FFFF]/5 to-[#002244]/5 rounded-2xl p-6 border border-[#00FFFF]/20">
                <h3 className="font-bold text-[#002244] mb-3">Our Promise to You</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00FFFF]" />
                    Response within 24 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00FFFF]" />
                    Free consultation and quote
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00FFFF]" />
                    No obligation assessment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002244] mb-4">Visit Our Showroom</h2>
            <p className="text-lg text-gray-600">
              63 Hillview Avenue, #03-12, Lam Soon Industrial Building, Singapore 669569
            </p>
          </div>
          
          <div className="h-96 md:h-[500px] rounded-2xl shadow-lg overflow-hidden">
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.730386343513!2d103.7588383152697!3d1.336490999023608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11a76274472b%3A0x863e461f32306263!2s63%20Hillview%20Ave%2C%20Singapore%20669569!5e0!3m2!1sen!2sus!4v1678886400000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
