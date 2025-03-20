
import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
  hoverEffect?: boolean;
}

const AnimatedCard = ({
  children,
  className,
  delay = 0,
  hoverEffect = true,
  ...props
}: AnimatedCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden opacity-0 transform translate-y-8",
        hoverEffect &&
          "transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-scoop-100",
        className
      )}
      style={{
        animation: `fadeIn 0.6s ease-out ${delay}s forwards, slideUp 0.6s ease-out ${delay}s forwards`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
