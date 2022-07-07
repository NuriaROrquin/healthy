import React from "react";

export default function BannerContainer({ titulo, background }) {
  return (
    <div className="flex-grow flex flex-row min-h-screen">
      <div className={`w-full ${background} bg-cover`}>
        <div className="flex h-full flex-col justify-center items-center">
          <div className="w-full bg-white bg-opacity-25 flex justify-center py-8">
            <h1 className="text-white">{titulo}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
