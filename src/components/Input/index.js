export function Input({
  id,
  placeholder = " ",
  label,
  required,
  type,
  step,
  tabIndex,
  value,
  disabled,
  ariaLabel,
}) {
  return (
    <div className="form-group max-w-xs">
      <div>
        <input
          id={id}
          type={type ?? "text"}
          name={id}
          step={step}
          placeholder={placeholder}
          tabIndex={tabIndex}
          autoComplete="off"
          defaultValue={value}
          disabled={disabled ?? false}
          onClick={(event) => event.target.select()}
          aria-label={ariaLabel}
        />
        <label htmlFor={id} className={required ? "required" : ""}>
          {label}
        </label>
      </div>
    </div>
  );
}
