import React from "react";

export default function SectionContainer({ children }) {
  return (
    <div className="flex-grow flex flex-row min-h-max">
      <div className="xl:px-24 sm:px-12 px-4 xl:pt-12 sm:pt-6 pt-4 w-full">
        <div className="max-w-screen-2xl m-auto">{children}</div>
      </div>
    </div>
  );
}
