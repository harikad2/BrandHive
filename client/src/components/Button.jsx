import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Utility function to merge tailwind classes */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Button({ 
  children, 
  variant = "primary", 
  className, 
  onClick,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-brand-500 text-white hover:bg-brand-600 focus:ring-brand-500 shadow-md hover:shadow-lg",
    secondary: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 focus:ring-slate-200 shadow-sm",
    accent: "bg-accent-500 text-white hover:bg-rose-800 focus:ring-accent-500 shadow-md hover:shadow-lg",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100 focus:ring-slate-200",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const size = props.size || "md";

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
