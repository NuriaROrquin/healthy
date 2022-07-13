import React from "react";

export default function Card({
  id,
  image,
  description,
  title,
  href,
  noscale,
  newblank,
}) {
  return (
    <a href={href} target={newblank && "_blank"}>
      <div
        id={id}
        className={`max-w-sm min-h-96 bg-orange rounded-lg border border-gray-200 ${
          !noscale && "hover:scale-110"
        } transition-all overflow-hidden shadow-xl w-full`}
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
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {title}
            </h3>
          </div>
          <p className="mb-3 font-normal text-white">{description}</p>
        </div>
      </div>
    </a>
  );
}
