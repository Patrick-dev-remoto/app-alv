import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const switchVariants = cva(
  "flex items-center cursor-pointer focus:border-bluec hover:border-bluec rounded-full transition-colors duration-200 ease-in-out focus:outline-none",
  {
    variants: {
      variant: {
        default: "bg-gray-200",
        active: "bg-bluec",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface SwitchButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof switchVariants> {
  isActive: boolean;
  onToggle: () => void;
}

const SwitchButton = React.forwardRef<HTMLButtonElement, SwitchButtonProps>(
  ({ className, isActive, onToggle, ...props }, ref) => {
    return (
      <button
        type="button"
        onClick={onToggle}
        className={cn(switchVariants({ variant: isActive ? "active" : "default", className }))}
        role="switch"
        aria-checked={isActive}
        ref={ref}
        {...props}
      >
        <span className="sr-only">Toggle</span>
        <span
          aria-hidden="true"
          className={`absolute h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out ${
            isActive ? "translate-x-0" : "-translate-x-[16px]"
          }`}
        ></span>
      </button>
    );
  }
);

SwitchButton.displayName = "SwitchButton";

export { SwitchButton };
