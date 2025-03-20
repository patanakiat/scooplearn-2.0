
import React from "react";
import { Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProductDescription = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="animate-slide-up opacity-0 bg-white p-10 rounded-2xl shadow-md border border-scoop-100 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <CardContent className="p-4">
              <div className="w-20 h-20 bg-gradient-to-br from-scoop-100 to-scoop-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <Sparkles className="h-10 w-10 text-scoop-600" />
              </div>
              <h2 className="heading-3 text-gray-900 mb-6 bg-gradient-to-r from-scoop-700 to-scoop-500 bg-clip-text text-transparent">Product Description</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                ScoopLearn is a learning app that develops skills through community features including teacher reviews, one-on-one learning, video lessons, student-teacher matching, structured learning paths, and interactive tools. It uses a time-based currency system where users accumulate "time" by uploading clips or subscribing, which can be exchanged for video lessons or communication.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
