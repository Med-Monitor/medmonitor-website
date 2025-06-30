import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mb-8">Last Updated: December 30, 2024</p>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-600 mb-6">
                <strong>Email Address:</strong> We collect your email address when you create an account or sign in to MedMonitor.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Information</h3>
              <p className="text-gray-600 mb-8">
                We collect information about how you use MedMonitor, including which sections of the app you access and what information is provided to you.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the collected information to:</p>
              <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                <li>Provide and maintain MedMonitor's services</li>
                <li>Improve and optimize the app's performance and user experience</li>
                <li>Send important updates about MedMonitor</li>
                <li>Respond to your requests and support needs</li>
                <li>Analyze usage patterns to enhance our features and ensure quality control</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-8">
                We implement appropriate security measures to protect your information from unauthorized access, alteration, or disclosure. Your data is transmitted using secure encryption protocols.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing</h2>
              <p className="text-gray-600 mb-8">
                We do not sell your personal information to third parties but your data will be visible to your family members and caregivers as configured in your app settings.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-8">
                You have the right to request deletion of your account and associated data. Please contact us at hello@medmonitor.io.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-600 mb-8">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-8">
                If you have any questions about this privacy policy, please contact us at hello@medmonitor.io.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Privacy;