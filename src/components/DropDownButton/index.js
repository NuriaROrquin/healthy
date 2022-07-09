import React from "react";

export default function DropDownButton({
  label,
  value1,
  value2,
  value3,
  value4,
  value5,
}) {
  return (
    <div className="flex justify-center gap-2 bg-slate-800 w-min p-3 rounded-md">
      <label for={label}>{label}:</label>
      <select className="outline-none rounded-md">
        <option value={value1}>{value1}</option>
        <option value={value2}>{value2}</option>
        <option value={value3}>{value3}</option>
        <option value={value4}>{value4}</option>
        <option value={value5}>{value5}</option>
      </select>
    </div>
  );
}
