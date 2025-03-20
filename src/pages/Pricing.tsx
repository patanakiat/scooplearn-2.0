
import { useEffect, useState } from "react";
import SubscriptionCard from "@/components/ui/SubscriptionCard";
import { ChevronRight, CreditCard, Check, DollarSign, Sparkles } from "lucide-react";

const Pricing = () => {
  // State for billing period toggle
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-scoop-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-scoop-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            
            <h1 className="heading-1 text-gray-900 mb-6 relative">
              Simple, Flexible{" "}
              <span className="bg-gradient-to-r from-scoop-600 to-scoop-500 bg-clip-text text-transparent">
                Pricing
              </span>
              <span className="absolute -top-1 ml-1">
                <Sparkles className="h-5 w-5 text-scoop-500" />
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that works best for your learning journey
            </p>
            
            {/* Billing toggle */}
            <div className="mt-10 inline-flex items-center bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-4 py-2 text-sm font-medium rounded ${
                  billingPeriod === "monthly" 
                    ? "bg-white text-scoop-600 shadow-sm" 
                    : "text-gray-500 hover:text-gray-700"
                } transition-all duration-200`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-4 py-2 text-sm font-medium rounded ${
                  billingPeriod === "yearly" 
                    ? "bg-white text-scoop-600 shadow-sm" 
                    : "text-gray-500 hover:text-gray-700"
                } transition-all duration-200`}
              >
                Yearly <span className="text-xs font-normal text-scoop-500">Save 17%</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute -right-32 top-1/2 w-64 h-64 bg-scoop-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -left-32 bottom-1/3 w-64 h-64 bg-scoop-100 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Scoop Free Plan */}
            <SubscriptionCard
              name="Scoop"
              price="Free"
              description="Exchange with others. Earn coins by contributing content."
              features={[
                "Exchange time with other users",
                "Earn coins by teaching",
                "Access to community content",
                "2-way communication learning",
                "Basic courses"
              ]}
              className="animate-slide-up opacity-0 hover:translate-y-[-8px]"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            />

            {/* Mini Scoop Plan */}
            <SubscriptionCard
              name="Mini Scoop"
              price={billingPeriod === "monthly" ? "฿300" : "฿3,000"}
              yearlyPrice={billingPeriod === "monthly" ? "฿3,600" : null}
              description="Receive weekly currency for general courses."
              features={[
                "1,000 Mini Scoop coins weekly",
                "Exchange for general courses",
                "Access to community content",
                "Ideal for content consumers",
                "No expert-led courses access"
              ]}
              className="animate-slide-up opacity-0 hover:translate-y-[-8px]"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            />

            {/* Scoop Plus Plan */}
            <SubscriptionCard
              name="Scoop Plus"
              price={billingPeriod === "monthly" ? "฿300" : "฿3,000"}
              yearlyPrice={billingPeriod === "monthly" ? "฿3,600" : null}
              description="Access expert-led courses and premium content."
              features={[
                "5,000 Scoop Plus coins",
                "Access to expert-led courses",
                "Higher quality content",
                "Premium learning materials",
                "Special features"
              ]}
              isPopular={true}
              className="animate-slide-up opacity-0 scale-105 hover:translate-y-[-8px]"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            />

            {/* Scoop Super Plan */}
            <SubscriptionCard
              name="Scoop Super"
              price={billingPeriod === "monthly" ? "฿500" : "฿5,000"}
              yearlyPrice={billingPeriod === "monthly" ? "฿6,000" : null}
              description="Unlimited access to all courses and features."
              features={[
                "Unlimited Scoop Super coins",
                "Access to all courses",
                "Both general and expert content",
                "Weekly bonus coins",
                "All premium features"
              ]}
              className="animate-slide-up opacity-0 hover:translate-y-[-8px]"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <h2 className="heading-2 text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How does the coin system work?",
                answer: "Our platform uses time-based coins as currency. You can earn coins by teaching, creating content, or subscribing to paid plans. These coins can then be used to access courses or schedule one-on-one sessions."
              },
              {
                question: "Can I upgrade or downgrade my plan?",
                answer: "Yes, you can switch between plans at any time. Changes will be applied at the start of your next billing cycle, and any unused coins will carry over according to our conversion policy."
              },
              {
                question: "What's the difference between general and expert courses?",
                answer: "General courses are created by community members and cover a wide range of topics. Expert courses are taught by verified specialists with proven expertise in their fields, offering more in-depth knowledge."
              },
              {
                question: "How are yearly subscriptions billed?",
                answer: "Yearly subscriptions are billed as a single payment at the start of your subscription period. This option provides savings compared to the monthly plan and includes the same features."
              },
              {
                question: "Can I create and sell my own courses?",
                answer: "Yes! All users can create and share educational content. When others access your content using their coins, you receive a portion of those coins, creating a sustainable ecosystem for knowledge sharing."
              },
              {
                question: "Is there a refund policy?",
                answer: "We offer a 7-day money-back guarantee for all paid plans. If you're not satisfied with your subscription, contact our support team within 7 days of purchase for a full refund."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-scoop-100 transition-all duration-300"
                style={{ animationDelay: `${0.1 * (index + 1)}s`, animationFillMode: "forwards" }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                  <span className="text-scoop-500 mr-2">
                    <DollarSign className="h-5 w-5" />
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
  );
};

export default Pricing;
