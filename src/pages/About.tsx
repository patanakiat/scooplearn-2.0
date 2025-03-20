
import { useEffect } from "react";
import AboutHero from "@/components/about/Hero";
import VisionMission from "@/components/about/VisionMission";
import ProductDescription from "@/components/about/ProductDescription";
import KeyFeatures from "@/components/about/KeyFeatures";
import AppFeatures from "@/components/about/AppFeatures";
import Achievements from "@/components/about/Achievements";
import Partnerships from "@/components/about/Partnerships";

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 pb-20 overflow-hidden">
      <AboutHero />
      <VisionMission />
      <ProductDescription />
      <KeyFeatures />
      <AppFeatures />
      <Achievements />
      <Partnerships />
    </div>
  );
};

export default About;
