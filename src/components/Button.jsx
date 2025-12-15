import React from "react";

function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0e0e11]";

  const variants = {
    primary: "bg-amber-500 text-black hover:bg-amber-400 focus:ring-amber-500",
    ghost: "bg-transparent text-gray-300 hover:text-amber-400",
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
