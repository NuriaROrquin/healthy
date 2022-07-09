import React from "react";

export default function SectionContainer({ children }) {
  return (
    <div className="flex-grow flex flex-row min-h-screen">
      <div className="xl:p-24 sm:p-12 p-4 pb-8 w-full">
        <div className="max-w-screen-2xl m-auto">{children}</div>
      </div>
    </div>
  );
}
