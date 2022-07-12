import React from "react";

export default function ButtonWhite({ children, disabled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="px-6 py-2 bg-white rounded-md text-orange max-w-xs hover:bg-greenAqua hover:text-white transition disabled:bg-gray-300 disabled:text-white"
    >
      {children}
    </button>
  );
}

export function ButtonGreen({ children, className, disabled, onClick }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`px-6 py-2 bg-orange rounded-md text-white max-w-xs hover:bg-white hover:border hover:border-orange hover:text-orange transition disabled:bg-gray-300 disabled:text-white ${className}`}
    >
      {children}
    </button>
  );
}
