
import React from "react";
import { BarChart3, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const Achievements = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container-custom">
        <h2 className="heading-3 text-gray-900 mb-12 text-center bg-gradient-to-r from-scoop-700 to-scoop-500 bg-clip-text text-transparent">Achievements & Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-md border border-scoop-200 animate-slide-up opacity-0 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" 
               style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-scoop-100 rounded-full flex items-center justify-center mr-4">
                <BarChart3 className="h-6 w-6 text-scoop-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Statistics</h3>
            </div>
            <ul className="space-y-5">
              {[
                "5+ million downloads in first month",
                "Ranked #1 in Education category on both Play Store and App Store",
                "5-star reviews from users globally",
                "Nominated for Google Play Award 2025"
              ].map((stat, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="w-3 h-3 bg-scoop-500 rounded-full flex-shrink-0 mt-1.5"></span>
                  <span className="text-gray-700">{stat}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-md border border-scoop-200 animate-slide-up opacity-0 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" 
               style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-scoop-100 rounded-full flex items-center justify-center mr-4">
                <Award className="h-6 w-6 text-scoop-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Awards</h3>
            </div>
            <ul className="space-y-5">
              {[
                "EdTech Excellence Award by DEPA",
                "ผู้นำเทรนด์อนาคตด้านเทคโนโลยีแห่งปี สาขา Leader of Technology",
                "CEO of the Year in EdTech Leadership",
                "EdTech Innovation of the Year"
              ].map((award, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="w-3 h-3 bg-scoop-500 rounded-full flex-shrink-0 mt-1.5"></span>
                  <span className="text-gray-700">{award}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
