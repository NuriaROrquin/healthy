export function SubmitButton({ color, label }) {
  return (
    <button
      type="submit"
      className={`btn focus:border-white text-white focus:text-teal ${color}`}
    >
      {label}
    </button>
  );
}
