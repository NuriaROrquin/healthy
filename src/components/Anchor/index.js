import React from "react";

export default function AnchorWhite({ children, href, newTab, disabled }) {
  return (
    <a
      href={href}
      target={`${newTab && "_blank"}`}
      rel="noopener noreferrer"
      disabled={disabled}
      className={`px-6 py-2 mt-4 ${
        href
          ? "bg-white hover:bg-tealLight hover:text-white text-orange"
          : "bg-gray-300 cursor-default"
      } self-end rounded-md max-w-xs transition`}
    >
      {children}
    </a>
  );
}

export function AnchorGreen({ children, href, newTab, disabled }) {
  return (
    <a
      href={href}
      target={`${newTab && "_blank"}`}
      rel="noopener noreferrer"
      className={`px-6 py-2 mt-4 ${
        href
          ? "bg-orange hover:bg-white hover:border hover:border-orange hover:text-orange "
          : "bg-gray-300 cursor-default"
      } rounded-md text-white max-w-xs w-max transition box-border`}
    >
      {children}
    </a>
  );
}
