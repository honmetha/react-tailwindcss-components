import classNames from "classnames";

interface InputFieldProps {
  label?: string;
  labelClass?: string;
  required?: boolean;
  name?: string;
  type?: string;
  className?: string;
  error?: string;
  value?: string;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  labelClass,
  required = false,
  name,
  type = "text",
  className,
  error,
  value,
  readOnly = false,
  onChange,
}: InputFieldProps) => {
  return (
    <label className={labelClass}>
      <span className={required ? "required" : ""}>{label}</span>
      <input
        name={name}
        type={type}
        className={classNames(
          "px-4 py-2.5 mt-2 w-full h-10 border transition-colors duration-150 ease-in-out focus:outline-none lg:h-12",
          { "focus:border-blue-500": !error && !readOnly },
          { "border-red-500": error },
          { "cursor-default bg-gray-500": readOnly },
          className
        )}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
      />
      <span className="text-red-500">{error}</span>
    </label>
  );
};

export default InputField;
