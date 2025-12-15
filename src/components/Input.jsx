import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="mb-1 inline-block pl-1 text-sm text-gray-400"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        type={type}
        className={`w-full rounded-lg border border-[#2a2a2f] bg-[#0e0e11] px-3 py-2 text-sm text-gray-200 placeholder-gray-500 outline-none  transition-colors focus:border-amber-500 focus:ring-1 focus:ring-amber-500 ${className}`}
        {...props}
      />
    </div>
  );
});

export default Input;
