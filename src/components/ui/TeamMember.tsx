// File: src/components/ui/TeamMember.tsx
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TeamMemberProps extends HTMLAttributes<HTMLDivElement> {
  image?: string;
  name: string;
  position: string;
  delay?: number;
}

const TeamMember = ({
  image = "/placeholder.svg",
  name,
  position,
  delay = 0,
  className,
  ...props
}: TeamMemberProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1 opacity-0 transform translate-y-8",
        className
      )}
      style={{
        animation: `fadeIn 0.6s ease-out ${delay}s forwards, slideUp 0.6s ease-out ${delay}s forwards`,
      }}
      {...props}
    >
      <div className="aspect-square w-full bg-gray-100 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500 mt-1">{position}</p>
      </div>
    </div>
  );
};

export default TeamMember;
