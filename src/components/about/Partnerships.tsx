import React from "react";
import { Card } from "@/components/ui/card";

// Import images
import TED from "@/img/TED.png";
import NECTEC from "@/img/NECTEC.png";
import QUIZLET from "@/img/QUIZLET.png";
import SKILLANE from "@/img/SKILLANE.png";
import trueDigital from "@/img/trueDigital.png";

// Map partner names to their corresponding images
const partnerImages = {
  "TED": TED,
  "NECTEC": NECTEC,
  "QUIZLET": QUIZLET,
  "SKILLANE": SKILLANE,
  "TRUE DIGITAL": trueDigital,
};

// Ordered partner list
const partners = ["TED", "NECTEC", "QUIZLET", "SKILLANE", "TRUE DIGITAL"];

const Partnerships = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom text-center">
        <h2 className="heading-3 text-gray-900 mb-12 bg-gradient-to-r from-scoop-700 to-scoop-500 bg-clip-text text-transparent">
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="bg-white p-8 rounded-xl shadow-md border border-scoop-100 w-48 h-48 flex items-center justify-center hover:shadow-lg hover:-translate-y-1 hover:border-scoop-300 transition-all duration-300 animate-slide-up opacity-0"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: "forwards" }}
            >
              <img
                src={partnerImages[partner]}
                alt={partner}
                className="w-32 h-32 object-contain"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
