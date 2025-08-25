import React, { useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Send, CheckCircle } from "lucide-react";

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


export default function ScheduleVisit() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    date: null,
    time: "",
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

  const handleDateSelect = (date) => {
    setFormData(prev => ({
      ...prev,
      date: date
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        address: "",
        service: "",
        date: null,
        time: "",
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
              Schedule a Free <span className="text-[#00FFFF]">Site Consultation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Let our experts visit your location to provide personalized recommendations 
              and the best possible signage solution for your space.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-[#002244] mb-8 text-center">Consultation Request Form</h2>

            {isSubmitted && (
              <SuccessMessage message="Thank you! Your consultation request has been sent. Our team will contact you shortly to confirm your visit." />
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <Input placeholder="Your full name" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required className="h-12"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <Input placeholder="Your company name" value={formData.company} onChange={(e) => handleInputChange("company", e.target.value)} className="h-12"/>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <Input type="email" placeholder="your.email@company.com" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required className="h-12"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <Input type="tel" placeholder="+65 1234 5678" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} required className="h-12"/>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Address *</label>
                <Textarea placeholder="Enter the full address for the site visit..." value={formData.address} onChange={(e) => handleInputChange("address", e.target.value)} required className="h-24"/>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Desired Service</label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger className="h-12"><SelectValue placeholder="Select a service" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="led-videowall">LED & Videowall</SelectItem>
                    <SelectItem value="neon-sign">Neon Sign</SelectItem>
                    <SelectItem value="custom-signage">Custom Signage</SelectItem>
                    <SelectItem value="cold-cathode">Cold Cathode</SelectItem>
                    <SelectItem value="not-sure">Not Sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant={"outline"} className="w-full h-12 justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.date ? format(formData.date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={formData.date} onSelect={handleDateSelect} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                  <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                    <SelectTrigger className="h-12"><SelectValue placeholder="Select a time slot" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (1pm - 5pm)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea placeholder="Please share any initial ideas or requirements..." value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} className="h-32"/>
              </div>

              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-[#00FFFF] text-[#002244] hover:bg-[#00FFFF]/90 font-semibold py-4 rounded-xl shadow-lg">
                {isSubmitting ? 'Scheduling...' : 'Schedule My Visit'}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}