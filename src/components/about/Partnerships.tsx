
import React from "react";
import { Card } from "@/components/ui/card";

const Partnerships = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom text-center">
        <h2 className="heading-3 text-gray-900 mb-12 bg-gradient-to-r from-scoop-700 to-scoop-500 bg-clip-text text-transparent">Our Partners</h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {["TED", "NECTEC", "QUIZLET", "SKILLANE", "TRUE DIGITAL"].map((partner, index) => (
            <Card 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md border border-scoop-100 w-48 h-24 flex items-center justify-center hover:shadow-lg hover:-translate-y-1 hover:border-scoop-300 transition-all duration-300 animate-slide-up opacity-0"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: "forwards" }}
            >
              <span className="font-bold text-xl bg-gradient-to-r from-scoop-700 to-scoop-500 bg-clip-text text-transparent">{partner}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
