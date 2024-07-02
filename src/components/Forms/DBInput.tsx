import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

const DBInput = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth,
  required,
  className,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="form-control">
          {label && (
            <label className="label">
              <span className="label-text">{label}</span>
            </label>
          )}
          <input
            {...field}
            type={type}
            placeholder={label}
            className={`${className} ${error ? "input-error" : ""}`}
            required={required}
          />
          {error && <span className="text-error text-sm">{error.message}</span>}
        </div>
      )}
    />
  );
};

export default DBInput;
