export function SubmitButton({ color, label }) {
  return (
    <button
      type="submit"
      className={`px-7 py-2 border ml-0 rounded-full border-solid outline-none transition-all duration-200 ease-in-out text-center no-underline font-normal cursor-pointer text-white hover:border-teal hover:bg-white hover:text-teal ${color}`}
    >
      {label}
    </button>
  );
}
