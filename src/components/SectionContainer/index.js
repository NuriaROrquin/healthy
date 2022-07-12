import React from "react";

export default function SectionContainer({ children, color }) {
  return (
    <div className={`flex-grow flex flex-row min-h-max ${color} py-16`}>
      <div className="xl:px-24 sm:px-12 px-4  w-full">
        <div className="max-w-screen-2xl m-auto">{children}</div>
      </div>
    </div>
  );
}
