
import React from "react";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactElement;
  containerClassName?: string;
}

const FloatingLabelInput = React.forwardRef<HTMLInputElement, FloatingLabelInputProps>(
  ({ label, error, icon, className, containerClassName, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const hasValue = !!props.value && props.value !== "";
    return (
      <div className={cn("relative mb-6", containerClassName)}>
        <div
          className={cn(
            "flex items-center rounded-xl bg-white shadow-sm ring-1 ring-inset ring-gray-200 hover:ring-primary focus-within:ring-2 focus-within:ring-primary transition duration-200",
            error && "!ring-red-400"
          )}
        >
          {icon && <div className="pl-4 text-gray-400">{icon}</div>}
          <input
            {...props}
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              "peer w-full p-4 bg-transparent outline-none transition placeholder-transparent rounded-xl font-medium text-gray-900",
              icon ? "pl-2" : "pl-4",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              className
            )}
            aria-invalid={!!error}
            autoComplete="off"
          />
          <label
            className={cn(
              "absolute left-4 top-1/2 z-10 origin-[0] -translate-y-1/2 transform select-none px-1 text-gray-400 bg-white transition-all duration-200 pointer-events-none",
              "peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-[:not(:placeholder-shown)]:-translate-y-[1.8rem] peer-[:not(:placeholder-shown)]:text-xs",
              (isFocused || hasValue) && "-translate-y-[1.8rem] text-xs bg-white px-1",
              icon ? "left-11" : ""
            )}
          >
            {label}
          </label>
        </div>
        {error && <div className="mt-1 ml-2 text-xs text-red-500 animate-fade-in">{error}</div>}
      </div>
    );
  }
);

FloatingLabelInput.displayName = "FloatingLabelInput";

export default FloatingLabelInput;
