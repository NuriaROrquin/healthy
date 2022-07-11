import React from "react";

export default function ButtonWhite({ children, disabled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="px-6 py-2 mt-4 bg-white rounded-md text-teal max-w-xs hover:bg-tealLight hover:text-white transition disabled:bg-gray-300 disabled:text-white"
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
      className={`px-6 py-2 mt-4 bg-teal rounded-md text-white max-w-xs hover:bg-white hover:border hover:border-teal hover:text-teal transition disabled:bg-gray-300 disabled:text-white ${className}`}
    >
      {children}
    </button>
  );
}
