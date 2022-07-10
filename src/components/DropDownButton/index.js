import React from "react";

export default function DropDownButton({
  firstOption,
  options,
  label,
  disabled,
  setOption,
}) {
  return (
    <div class="max-w-2xl mx-auto">
      <label
        for="countries"
        class="block mb-2 text-sm font-semibold text-gray-500 "
      >
        {label}
      </label>

      <select
        id="countries"
        disabled={disabled}
        className="bg-white border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-teal focus:border-teal block w-full p-2.5 items-center justify-center outline-none"
        onChange={(e) => setOption(e)}
      >
        <option selected>{firstOption}</option>

        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}
