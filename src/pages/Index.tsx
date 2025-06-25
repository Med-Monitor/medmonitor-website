
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Download } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      
      {/* Target Audience Section */}
      <section id="about" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Designed for Your Family's Health Journey
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Whether you're recovering from surgery or managing ongoing family health needs, 
              MedMonitor provides the tools and peace of mind you deserve.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Post-Surgery Recovery</h3>
                <p className="text-gray-600 mb-6">
                  Managing complex medication schedules during recovery can be overwhelming. 
                  MedMonitor simplifies the process with clear scheduling and reliable reminders.
                </p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Pain medication tracking</li>
                  <li>• As-needed medication logs</li>
                  <li>• Recovery progress monitoring</li>
                  <li>• Caregiver coordination</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Family Medication Management</h3>
                <p className="text-gray-600 mb-6">
                  Keep track of medications for multiple family members, from children's antibiotics 
                  to grandparents' daily prescriptions.
                </p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Multiple family profiles</li>
                  <li>• Medication interaction alerts</li>
                  <li>• Prescription refill reminders</li>
                  <li>• Healthcare provider sharing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/a912eb4c-9c07-4295-87e4-0f1e17b085a3.png" 
                alt="MedMonitor Icon" 
                className="h-20 w-20"
              />
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get MedMonitor Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of families who trust MedMonitor for their medication management needs.
            </p>

            <div className="flex items-center justify-center space-x-2 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="text-gray-600 ml-2">4.8/5 on the App Store</span>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Download from App Store
            </Button>

            <p className="text-sm text-gray-500 mt-4">
              Available for iPhone and iPad • iOS 14.0 or later
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
