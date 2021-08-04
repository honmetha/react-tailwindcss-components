import classNames from "classnames";

interface SelectMenuProps {
  label?: string;
  labelClass?: string;
  error?: string;
  required?: boolean;
  name?: string;
  value?: string;
  options: IOptions[];
  onChange(e: any): void;
}

interface IOptions {
  value: string;
  label: string;
}

const SelectMenu = ({
  label,
  labelClass,
  error,
  required = false,
  name,
  value,
  options,
  onChange,
}: SelectMenuProps) => {
  return (
    <label className={labelClass}>
      <span className={required ? "required" : ""}>{label}</span>
      <select
        name={name}
        value={value}
        className={classNames(
          "px-4 py-2.5 mt-2 w-full h-10 border transition-colors duration-150 ease-in-out focus:outline-none lg:h-12",
          { "focus:border-true-v": !error },
          { "border-red-500": error }
        )}
        onChange={onChange}
      >
        <option value="">Please select</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="text-red-500">{error}</span>
    </label>
  );
};

export default SelectMenu;
