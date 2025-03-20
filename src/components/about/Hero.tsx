
import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-scoop-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(249,115,22,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(249,115,22,0.1),transparent_70%)]"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-1 text-gray-900 mb-6 animate-slide-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            About{" "}
            <span className="bg-gradient-to-r from-scoop-700 to-scoop-500 bg-clip-text text-transparent">
              ScoopLearn
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-slide-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            Revolutionizing education through community-driven learning and a unique time-based currency system.
          </p>
          <div className="flex justify-center space-x-4 animate-slide-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
