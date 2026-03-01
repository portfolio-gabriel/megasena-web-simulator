import type { ChangeEvent } from "react";
import type { SelectProps } from "../types/interfaces";

export const Select = <T extends string | number>({
    id,
    label,
    options,
    value,
    onChange,
    disabled = false,
    className = undefined,
}: SelectProps<T>) => {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    // Tenta converter para número se o valor original for número
    const parsedValue = typeof value === 'number' ? Number(newValue) : newValue;
    onChange(parsedValue as T);
  };

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="text-lg font-semibold text-green-700">
          {label}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className="w-[80%] rounded-md border border-gray-300 bg-white px-3 py-2 text-lg text-green-900 font-semibold shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
      >
        {options.map((option) => (
          <option key={String(option.value)} value={option.value} className="text-green-900">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
