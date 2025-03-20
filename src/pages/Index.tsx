
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, MessageSquare, Play, Book, Users, Star, Rocket, Globe } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-gray-900 mb-4">
              How ScoopLearn Works
            </h2>
            <p className="text-lg text-gray-600">
              Our revolutionary platform transforms the way you learn and share
              knowledge through a simple but powerful process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Book className="h-8 w-8 text-white" />,
                title: "Learn & Earn",
                description: "Learn from courses and earn Scoop coins as you complete lessons and contribute content."
              },
              {
                icon: <Play className="h-8 w-8 text-white" />,
                title: "Create & Share",
                description: "Create your own educational content and share your expertise with the community."
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-white" />,
                title: "Connect & Grow",
                description: "Connect with experts for one-on-one sessions using your earned coins."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center animate-slide-up opacity-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300" 
                style={{ animationDelay: `${0.1 * (index + 1)}s`, animationFillMode: "forwards" }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-scoop-500 to-scoop-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md transform -rotate-3">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {item.description}
                </p>
                <div className="h-1 w-12 bg-gradient-to-r from-scoop-400 to-scoop-500 rounded-full mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - New */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600">
              Discover how ScoopLearn has transformed the learning journey of our community members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "ScoopLearn completely changed how I approach learning. The community aspect is incredible!",
                name: "Phichada T.",
                role: "Fortune Teller"
              },
              {
                quote: "As an instructor, I've found a platform that truly values knowledge sharing and fair compensation.",
                name: "George J.",
                role: "Content Creator"
              },
              {
                quote: "The time-based currency system is genius! I can learn and teach on the same platform.",
                name: "Yi Long M.",
                role: "Software Engineer"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 animate-slide-up opacity-0" style={{ animationDelay: `${0.1 * (index + 1)}s`, animationFillMode: "forwards" }}>
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="inline-block h-5 w-5 text-scoop-400 fill-scoop-400 mr-1" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow italic">"{testimonial.quote}"</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
