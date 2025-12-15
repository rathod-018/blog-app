import React, { useId } from "react";

const Select = React.forwardRef(function Select(
  { options = [], label, className = "", ...props },
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

      <select
        id={id}
        ref={ref}
        {...props}
        className={`w-full rounded-lg border border-[#2a2a2f]
                    bg-[#0e0e11] px-3 py-2 text-sm text-gray-200
                    outline-none transition-colors
                    focus:border-amber-500 focus:ring-1 focus:ring-amber-500
                    ${className}`}
      >
        {options?.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-[#0e0e11] text-gray-200"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
