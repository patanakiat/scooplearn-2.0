import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { useToast } from "@/components/ui/use-toast";

interface SubscriptionCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  price: string;
  yearlyPrice?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const SubscriptionCard = ({
  name,
  price,
  yearlyPrice,
  description,
  features,
  isPopular = false,
  className,
  style,
  ...props
}: SubscriptionCardProps) => {
  const { toast } = useToast(); // Initialize toast from the custom hook[1]

  const handleComingSoon = () => {
    toast({
      title: "Coming Soon",
      description:
        "This feature is under development and will be available soon!",
      duration: 3000,
    });
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden transition-all duration-300 flex flex-col",
        isPopular
          ? "bg-gradient-to-br from-scoop-50 to-white border-2 border-scoop-500 shadow-lg"
          : "bg-white border border-gray-200 hover:border-scoop-200 hover:shadow-md",
        className
      )}
      style={style}
      {...props}
    >
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-scoop-500 text-white text-xs font-bold px-3 py-1 transform rotate-0 origin-top-right">
            POPULAR
          </div>
        </div>
      )}

      <div className="p-6 sm:p-8 flex-grow">
        <h3
          className={cn(
            "text-xl font-bold",
            isPopular ? "text-scoop-600" : "text-gray-900"
          )}
        >
          {name}
        </h3>

        <div className="mt-4 flex items-baseline">
          <span
            className={cn(
              "text-3xl sm:text-4xl font-extrabold",
              isPopular ? "text-scoop-600" : "text-gray-900"
            )}
          >
            {price}
          </span>
          {price !== "Free" && (
            <span className="ml-1 text-gray-500 text-sm">/mo</span>
          )}
        </div>

        {yearlyPrice && (
          <div className="mt-1 text-sm text-gray-500">
            {yearlyPrice} per year
          </div>
        )}

        <p className="mt-4 text-gray-600 text-sm">{description}</p>

        <ul className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check
                className={cn(
                  "h-5 w-5 flex-shrink-0 mr-2",
                  isPopular ? "text-scoop-500" : "text-gray-400"
                )}
              />
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto p-6 sm:px-8 sm:pb-8">
        <Button
          onClick={handleComingSoon} // Attach the function to the button’s click event[1]
          className={cn(
            "w-full",
            isPopular
              ? "bg-scoop-500 hover:bg-scoop-600 text-white"
              : "bg-white border-2 border-gray-200 text-gray-800 hover:bg-gray-50"
          )}
        >
          {price === "Free" ? "Get Started" : "Subscribe"}
        </Button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
