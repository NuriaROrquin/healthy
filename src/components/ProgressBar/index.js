import React from "react";

export default function ProgressBar({ number }) {
  return (
    <div class="w-full bg-gray-200 rounded-full">
      <div
        className="bg-greenAqua text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
        style={{ width: `${number}%` }}
      >
        {number}%
      </div>
    </div>
  );
}
