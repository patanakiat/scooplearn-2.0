
import React from "react";
import { Shield, Globe, Sparkles, Zap, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const KeyFeatures = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.05),transparent_70%)]"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-3 text-gray-900 mb-12 text-center bg-gradient-to-r from-scoop-700 to-scoop-500 bg-clip-text text-transparent">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in opacity-0" 
               style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <FeatureCard 
              icon={<Shield className="h-6 w-6 text-scoop-600" />}
              title="Time-for-Value Exchange"
              description="Transform time into value instead of money"
            />
            
            <FeatureCard 
              icon={<Globe className="h-6 w-6 text-scoop-600" />}
              title="Skill Ecosystem"
              description="Learn and share skills within the community"
            />
            
            <FeatureCard 
              icon={<Sparkles className="h-6 w-6 text-scoop-600" />}
              title="Creative Teaching"
              description="Everyone can teach or create content freely"
            />
            
            <FeatureCard 
              icon={<Zap className="h-6 w-6 text-scoop-600" />}
              title="Reducing Educational Inequality"
              description="Using time and skills instead of money"
            />
            
            <FeatureCard 
              icon={<Target className="h-6 w-6 text-scoop-600" />}
              title="Active Participation"
              description="Users must learn or create content to stay engaged"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <Card className="flex items-start p-8 bg-gradient-to-br from-white to-scoop-50 rounded-xl shadow-md border border-scoop-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-scoop-100 flex items-center justify-center mr-4">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </Card>
);

export default KeyFeatures;
