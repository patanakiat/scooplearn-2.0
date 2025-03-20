
import React from "react";
import { Globe, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VisionMission = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.05),transparent_80%)]"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="bg-gradient-to-br from-white to-scoop-50 rounded-2xl shadow-md border border-scoop-100 animate-slide-up opacity-0 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" 
               style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-scoop-100 rounded-full flex items-center justify-center mr-4">
                  <Globe className="h-7 w-7 text-scoop-600" />
                </div>
                <h2 className="heading-3 text-gray-900 bg-gradient-to-r from-scoop-700 to-scoop-500 bg-clip-text text-transparent">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Creating platforms that connect people through skill and knowledge exchange, promoting learning and building sustainable learning communities through technology.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-white to-scoop-50 rounded-2xl shadow-md border border-scoop-100 animate-slide-up opacity-0 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" 
               style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-scoop-100 rounded-full flex items-center justify-center mr-4">
                  <Target className="h-7 w-7 text-scoop-600" />
                </div>
                <h2 className="heading-3 text-gray-900 bg-gradient-to-r from-scoop-700 to-scoop-500 bg-clip-text text-transparent">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Developing educational platforms for the digital era with quality content accessible anytime and anywhere.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
