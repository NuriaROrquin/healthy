import React from "react";

export const ChevronRight = ({ props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        d="m15.4 9.88-4.59-4.59A1 1 0 1 0 9.4 6.71l4.6 4.58a.997.997 0 0 1 .219 1.095.998.998 0 0 1-.22.325l-4.6 4.58a1 1 0 1 0 1.41 1.42l4.59-4.59a3 3 0 0 0 0-4.24Z"
        fill="#fff"
      />
    </svg>
  );
};
