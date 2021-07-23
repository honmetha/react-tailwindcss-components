interface SelectMenuProps {
  label?: string;
  labelClass?: string;
  required?: boolean;
  name?: string;
  value?: string;
  options: IOptions[];
  onChange(e: any): void;
}

interface IOptions {
  id: number;
  value: string;
  text: string;
}

const SelectMenu = ({
  label,
  labelClass,
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
        className="px-4 py-2.5 mt-2 w-full h-10 border transition-colors duration-150 ease-in-out focus:outline-none focus:border-blue-500 lg:h-12"
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectMenu;
