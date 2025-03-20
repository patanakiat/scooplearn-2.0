
import React from "react";
import { BarChart3, MessageSquare, Play, Shield, Target, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const AppFeatures = () => {
  const features = [
    {
      title: "Review System",
      description: "Finding relatable teachers through our comprehensive teacher review system.",
      delay: "0.1s",
      icon: <BarChart3 className="h-7 w-7 text-scoop-600" />
    },
    {
      title: "2-Way Communication",
      description: "One-on-one sessions with experts and teachers through personalized video calls.",
      delay: "0.2s",
      icon: <MessageSquare className="h-7 w-7 text-scoop-600" />
    },
    {
      title: "1-Way Communication",
      description: "Watch shared videos and educational content created by community members.",
      delay: "0.3s",
      icon: <Play className="h-7 w-7 text-scoop-600" />
    },
    {
      title: "Profile System",
      description: "Display your skills and expertise to build credibility within the community.",
      delay: "0.4s",
      icon: <Shield className="h-7 w-7 text-scoop-600" />
    },
    {
      title: "Structured Learning Path",
      description: "Follow organized learning progression for effective skill development.",
      delay: "0.5s",
      icon: <Target className="h-7 w-7 text-scoop-600" />
    },
    {
      title: "Interactive Tools",
      description: "Engage with exercises, games, and Q&A to enhance your learning experience.",
      delay: "0.6s",
      icon: <Sparkles className="h-7 w-7 text-scoop-600" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.05),transparent_80%)]"></div>
      <div className="container-custom relative z-10">
        <h2 className="heading-3 text-gray-900 mb-12 text-center bg-gradient-to-r from-scoop-700 to-scoop-500 bg-clip-text text-transparent">App Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md border border-scoop-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-slide-up opacity-0" 
              style={{ animationDelay: feature.delay, animationFillMode: "forwards" }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-scoop-100 to-scoop-50 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
