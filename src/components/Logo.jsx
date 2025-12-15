import React from "react";

function Logo({ width = "auto" }) {
  return (
    <div
      style={{ width }}
      className="select-none font-semibold tracking-wide text-gray-200"
    >
      <span className="text-amber-400">Blog</span>
      <span className="text-gray-200">App</span>
    </div>
  );
}

export default Logo;