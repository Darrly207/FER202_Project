import React from "react";

export const Avatar = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={`rounded-full ${className}`} />;
};
