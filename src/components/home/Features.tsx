
import { Book, Clock, MessageSquare, Users, Star, RouteIcon } from "lucide-react";
import AnimatedCard from "@/components/ui/AnimatedCard";

const features = [
  {
    icon: <Users className="h-6 w-6 text-scoop-500" />,
    title: "Learn with Community",
    description:
      "Connect with peers and mentors in a vibrant learning community that supports your educational journey.",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-scoop-500" />,
    title: "One-on-One Learning",
    description:
      "Engage directly with experts and teachers through personalized 1:1 video calls and messaging.",
  },
  {
    icon: <Book className="h-6 w-6 text-scoop-500" />,
    title: "Video Lessons",
    description:
      "Access a vast library of educational content from various subjects created by both community members and experts.",
  },
  {
    icon: <Clock className="h-6 w-6 text-scoop-500" />,
    title: "Time as Currency",
    description:
      "Unique system that converts your learning and teaching time into digital currency for accessing premium content.",
  },
  {
    icon: <Star className="h-6 w-6 text-scoop-500" />,
    title: "Teacher Reviews",
    description:
      "Find the best teachers through our comprehensive review system that highlights teaching quality and expertise.",
  },
  {
    icon: <RouteIcon className="h-6 w-6 text-scoop-500" />,
    title: "Structured Learning Path",
    description:
      "Follow customized learning tracks that guide you step-by-step through your educational journey.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">
            Everything You Need to
            <span className="ml-2 bg-gradient-to-r from-scoop-600 to-scoop-500 bg-clip-text text-transparent">
              Learn Effectively
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Our platform combines community learning with expert-led education
            through a revolutionary time-based currency system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard
              key={index}
              delay={0.1 + index * 0.1}
              className="p-6"
            >
              <div className="rounded-lg p-3 bg-scoop-50 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
