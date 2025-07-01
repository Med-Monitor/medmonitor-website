
import { ArrowRight, Shield, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              Available on App Store
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Medication Tracking
            <span className="block text-blue-600">Made Simple</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Keep your whole family's medications organized with MedMonitor. Perfect for post-operative care 
            and managing both regular and as-needed medications safely and efficiently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" asChild>
              <a href="https://apps.apple.com/au/app/med-monitor/id6480152154" target="_blank" rel="noopener noreferrer">
                Download Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-blue-200 text-blue-700 hover:bg-blue-50">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-blue-100">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600 text-center">Your family's health data is protected with enterprise-grade security</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-blue-100">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Family Focused</h3>
              <p className="text-gray-600 text-center">Manage medications for multiple family members in one place</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-blue-100">
              <div className="bg-purple-100 p-3 rounded-full mb-4">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart Reminders</h3>
              <p className="text-gray-600 text-center">Never miss a dose with intelligent medication reminders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
