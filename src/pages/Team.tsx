import { useEffect } from "react";
import TeamMember from "@/components/ui/TeamMember";
import { Star, Award, Globe } from "lucide-react";

// Import images from the src/img directory
import Weerapat from "@/img/Weerapat.jpg";
import Patanakiat from "@/img/Patanakiat.jpg";
import Waravit from "@/img/Waravit.jpg";
import Sastrasilp from "@/img/Sastrasilp.jpg";
import Phiyada from "@/img/Phiyada.jpg";
import Chidchanok from "@/img/Chidchanok.jpg";
import Penthip from "@/img/Penthip.jpg";
import Manussanun from "@/img/Manussanun.jpg";

const Team = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-scoop-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-scoop-200/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 text-gray-900 mb-6 relative">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-scoop-600 to-scoop-500 bg-clip-text text-transparent">
                Team
              </span>
              <span className="absolute -top-1 ml-1">
                <Star className="h-5 w-5 text-scoop-500 fill-scoop-500" />
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind ScoopLearn who are dedicated to
              revolutionizing education.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute -right-32 top-1/2 w-64 h-64 bg-scoop-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="container-custom relative z-10">
          <div className="flex items-center mb-12 justify-center">
            <div className="h-0.5 w-10 bg-scoop-300 mr-6"></div>
            <h2 className="heading-3 text-gray-900 text-center font-bold relative">
              Leadership
              <span className="absolute -top-4 -right-6">
                <Award className="h-5 w-5 text-scoop-500" />
              </span>
            </h2>
            <div className="h-0.5 w-10 bg-scoop-300 ml-6"></div>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-2xl mx-auto">
              <TeamMember
                name="Weerapat Khankaew"
                position="Chief Executive Officer"
                image={Weerapat}
                className="transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                delay={0.1}
              />
              <TeamMember
                name="Patanakiat Onsiri"
                position="Chief Technology Officer"
                image={Patanakiat}
                className="transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                delay={0.2}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute -left-32 top-1/2 w-64 h-64 bg-scoop-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="container-custom relative z-10">
          <div className="flex items-center mb-12 justify-center">
            <div className="h-0.5 w-10 bg-scoop-300 mr-6"></div>
            <h2 className="heading-3 text-gray-900 text-center font-bold">
              Management Team
            </h2>
            <div className="h-0.5 w-10 bg-scoop-300 ml-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-2xl mx-auto">
            <TeamMember
              name="Waravit Siri-ittiwong"
              position="Marketing Manager"
              image={Waravit}
              className="bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-xl transition-all duration-300"
              delay={0.1}
            />
            <TeamMember
              name="Sastrasilp Pongsud"
              position="Smart Learning Application Manager"
              image={Sastrasilp}
              className="bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-xl transition-all duration-300"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute -right-32 bottom-1/3 w-64 h-64 bg-scoop-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -left-32 top-1/3 w-64 h-64 bg-scoop-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="container-custom relative z-10">
          <div className="flex items-center mb-12 justify-center">
            <div className="h-0.5 w-10 bg-scoop-300 mr-6"></div>
            <h2 className="heading-3 text-gray-900 text-center font-bold">
              Core Team
              <span className="ml-2 inline-block">
                <Globe className="h-5 w-5 text-scoop-500 inline" />
              </span>
            </h2>
            <div className="h-0.5 w-10 bg-scoop-300 ml-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              name="Phiyada Samong"
              position="Data Analyst"
              image={Phiyada}
              className="transform hover:rotate-1 shadow-sm hover:shadow-md transition-all duration-300"
              delay={0.1}
            />
            <TeamMember
              name="Chidchanok Phaingam"
              position="Accountant"
              image={Chidchanok}
              className="transform hover:rotate-1 shadow-sm hover:shadow-md transition-all duration-300"
              delay={0.2}
            />
            <TeamMember
              name="Penthip Pongsuea"
              position="Human Resource"
              image={Penthip}
              className="transform hover:rotate-1 shadow-sm hover:shadow-md transition-all duration-300"
              delay={0.3}
            />
            <TeamMember
              name="Manussanun Anon"
              position="Public Relations"
              image={Manussanun}
              className="transform hover:rotate-1 shadow-sm hover:shadow-md transition-all duration-300"
              delay={0.4}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
