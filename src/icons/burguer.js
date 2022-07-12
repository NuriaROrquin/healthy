import React from "react";

export default function Burguer({ props }) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)" fill="#fff">
        <path d="M23 11H1a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2ZM23 4H1a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2ZM23 18H1a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
