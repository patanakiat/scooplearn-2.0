
import { ChevronRight, ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-scoop-100/30 to-scoop-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-scoop-200/20 to-scoop-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-scoop-200/10 to-scoop-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            {/* Floating Badge */}
            <div className="animate-bounce mb-6 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-scoop-50 border border-scoop-100 text-scoop-700 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Everyone Can Learn Everywhere</span>
              <Sparkles className="h-4 w-4" />
            </div>

            <h1 className="heading-1 text-gray-900 mb-8">
              <span className="relative">
                <span className="bg-gradient-to-r from-scoop-700 via-scoop-600 to-scoop-500 bg-clip-text text-transparent font-extrabold">
                  ScoopLearn
                </span>
                <span className="absolute -top-1.5 -right-4">
                  <Star className="h-5 w-5 text-scoop-500 fill-scoop-500" />
                </span>
              </span>
              <br />
              <span className="leading-tight text-4xl sm:text-5xl font-bold">
                A New Way to{" "}
                <span className="relative inline-block">
                  Learn
                  <svg className="absolute -bottom-2 w-full opacity-70" viewBox="0 0 150 8" preserveAspectRatio="none">
                    <path d="M2 5.43094C64.2556 2.99638 126.813 2.99638 148 5.43094" stroke="#f97316" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
                ,{" "}
                <span className="relative inline-block">
                  Share
                  <svg className="absolute -bottom-2 w-full opacity-70" viewBox="0 0 150 8" preserveAspectRatio="none">
                    <path d="M2 5.43094C64.2556 2.99638 126.813 2.99638 148 5.43094" stroke="#f97316" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </svg>
                </span>{" "}
                and{" "}
                <span className="relative inline-block">
                  Grow
                  <svg className="absolute -bottom-2 w-full opacity-70" viewBox="0 0 150 8" preserveAspectRatio="none">
                    <path d="M2 5.43094C64.2556 2.99638 126.813 2.99638 148 5.43094" stroke="#f97316" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              A learning platform that develops skills through community
              interaction, expert guidance, and structured learning paths powered
              by a unique time-based currency system.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/about">
                <Button className="text-white bg-scoop-500 hover:bg-scoop-600 h-14 px-10 text-base font-medium shadow-lg shadow-scoop-500/20 rounded-xl hover:scale-105 transition-all duration-300">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="h-14 px-10 text-base border-scoop-200 hover:bg-scoop-50 rounded-xl transition-all duration-300">
                  View Plans
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Preview/Card Section */}
          <div className="relative w-full max-w-4xl mx-auto mt-20 rounded-2xl shadow-2xl shadow-scoop-500/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-scoop-50 to-white opacity-90"></div>
            
            <div className="relative p-8 sm:p-12 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-scoop-500 flex items-center justify-center mb-6 shadow-lg shadow-scoop-500/20">
                <Star className="h-10 w-10 text-white" fill="white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Experience Interactive Learning
              </h3>
              
              <p className="text-center text-gray-600 mb-8 max-w-2xl">
                Join thousands of learners who are already benefiting from our unique 
                approach to education and skill development.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {[
                  { number: "10K+", label: "Active Learners" },
                  { number: "500+", label: "Expert Instructors" },
                  { number: "1.2M", label: "Learning Hours" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl text-center hover:shadow-md transition-all duration-300">
                    <div className="text-3xl font-bold text-scoop-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
