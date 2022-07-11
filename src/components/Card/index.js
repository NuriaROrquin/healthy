import React from "react";

export default function Card({ image, description, title, href, noscale, newblank }) {
  return (
    <a href={href} target={newblank && "_blank"}>
      <div
        className={`max-w-sm min-h-96 bg-teal rounded-lg border border-gray-200 ${
          !noscale && "hover:scale-110"
        } transition-all overflow-hidden shadow-xl`}
      >
        <div className="h-60">
          <img
            className="rounded-t-lg h-full object-cover w-full"
            src={image}
            alt=""
          />
        </div>
        <div className="p-5">
          <div>
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {title}
            </h4>
          </div>
          <p className="mb-3 font-normal text-white">{description}</p>
        </div>
      </div>
    </a>
  );
}
