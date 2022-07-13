import React from "react";

export default function DropDownButton({
  firstOption,
  options,
  label,
  disabled,
  setOption,
  className,
}) {
  return (
    <div class={`max-w-2xl mx-auto ${className} lg:mt-4`}>
      <label
        for={label}
        class="block mb-2 text-sm font-semibold text-gray-500 "
      >
        {label}

        <select
          id={label}
          disabled={disabled}
          className="bg-white border border-gray-300 text-black font-cairo-light text-sm rounded-lg focus:ring-orange focus:border-orange block w-full p-2.5 items-center justify-center outline-none disabled:bg-[#efefef] disabled:bg-opacity-60 disabled:border disabled:border-[#767676] disabled:border-opacity-30 disabled:text-gray-600"
          onChange={(e) => setOption(e)}
        >
          <option selected>{firstOption}</option>

          {options.map((option) => (
            <option id={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
