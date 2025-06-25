
import { Mail, Shield, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/a912eb4c-9c07-4295-87e4-0f1e17b085a3.png" 
                alt="MedMonitor Icon" 
                className="h-8 w-8"
              />
              <img 
                src="/lovable-uploads/5daef2c4-67a8-4806-8b33-9de91ecdf7b4.png" 
                alt="MedMonitor Logo" 
                className="h-8"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Helping families manage medications safely and effectively. 
              Perfect for post-operative care and ongoing health management.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Shield className="h-4 w-4" />
              <span>HIPAA Compliant & Secure</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#download" className="hover:text-white transition-colors">Download</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors flex items-center">
                <FileText className="h-3 w-3 mr-1" />
                Privacy Policy
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center">
                <Mail className="h-3 w-3 mr-1" />
                Contact Us
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MedMonitor. All rights reserved. Available on the App Store.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
