import { Controller, useFormContext } from "react-hook-form";

interface ITextField {
  name: string;
  size?: "small" | "medium";
  placeholder?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  items: string[];
}

const DBSelectField = ({
  items,
  name,
  label,
  size = "small",
  required,
  fullWidth = true,
}: ITextField) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className={`form-control ${fullWidth ? "w-full" : "w-auto"}`}>
          {label && (
            <label className="label">
              <span className="label-text">{label}</span>
            </label>
          )}
          <select
            {...field}
            className={`select select-bordered ${
              size === "medium" ? "select-md" : "select-sm"
            } ${isError ? "select-error" : ""}`}
            required={required}
          >
            <option value="" disabled>
              {label}
            </option>
            {items.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {isError && (
            <span className="text-error text-sm">
              {formState.errors[name]?.message as string}
            </span>
          )}
        </div>
      )}
    />
  );
};

export default DBSelectField;
