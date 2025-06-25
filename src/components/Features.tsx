
import { Pill, Calendar, Bell, Heart, FileText, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Pill,
      title: "Medication Tracking",
      description: "Track both regular and as-needed medications with detailed dosage information and timing.",
      color: "blue"
    },
    {
      icon: Calendar,
      title: "Schedule Management",
      description: "Set up complex medication schedules with custom frequencies and timing preferences.",
      color: "green"
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Receive timely notifications to ensure you never miss a dose, with snooze options.",
      color: "purple"
    },
    {
      icon: Heart,
      title: "Post-Surgery Care",
      description: "Specially designed for post-operative medication management and recovery tracking.",
      color: "red"
    },
    {
      icon: FileText,
      title: "Medication History",
      description: "Keep detailed records of medication intake for healthcare provider consultations.",
      color: "yellow"
    },
    {
      icon: Smartphone,
      title: "Easy to Use",
      description: "Intuitive interface designed for users of all ages, from teenagers to seniors.",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      red: "bg-red-100 text-red-600",
      yellow: "bg-yellow-100 text-yellow-600",
      indigo: "bg-indigo-100 text-indigo-600"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-blue-100 text-blue-600";
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for
            <span className="block text-blue-600">Medication Management</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            MedMonitor provides comprehensive tools to keep your family's medications organized, 
            tracked, and taken on schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-lg ${getColorClasses(feature.color)} flex items-center justify-center mb-6`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
