import React from "react";

export const Badge = ({ children, className }) => {
  return (
    <span className={`px-3 py-1 rounded-full text-sm ${className}`}>
      {children}
    </span>
  );
};
