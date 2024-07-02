import dayjs from "dayjs";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import { Controller, useFormContext } from "react-hook-form";

interface IDatePicker {
  name: string;
  size?: "small" | "medium";
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const DBDatePicker = ({
  name,
  size = "small",
  label,
  required,
  fullWidth = true,
}: IDatePicker) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={dayjs(new Date().toDateString())}
      render={({ field: { onChange, value, ...field } }) => (
        <div className={`form-control  ${fullWidth ? "w-full" : "w-auto"}`}>
          {label && (
            <label className="label">
              <span className="label-text">{label}</span>
            </label>
          )}
          <DatePicker
            {...field}
            onChange={onChange}
            value={value}
            required={required}
            className={`input input-bordered${
              size === "medium" ? "input-md" : "input-sm"
            } ${isError ? "input-error" : ""}`}
          />
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

export default DBDatePicker;
