import React from "react";

export default function Hour({ props }) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          d="M14 13a2 2 0 1 1-3-1.723V7a1 1 0 0 1 2 0v4.277A1.994 1.994 0 0 1 14 13Zm6.06-7.461a11 11 0 1 1-16.12 0l-.672-.747A3.672 3.672 0 0 1 2 5a1 1 0 0 1 0-2c.785 0 1-.215 1-1a1 1 0 1 1 2 0c.006.487-.09.97-.28 1.417l.706.784A10.923 10.923 0 0 1 11 2.051V1a1 1 0 0 1 2 0v1.051c2.022.184 3.952.929 5.574 2.149l.706-.784A3.513 3.513 0 0 1 19 2a1 1 0 0 1 2 0c0 .785.215 1 1 1a1 1 0 1 1 0 2 3.672 3.672 0 0 1-1.268-.208l-.672.747ZM21 13a9 9 0 1 0-9 9 9.01 9.01 0 0 0 9-9Z"
          fill="#95C89A"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
