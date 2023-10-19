import { IconType } from "react-icons";
import { InputHTMLAttributes } from "react";

type InputProps = {
  label: string;
  name: string;
  Icon?: IconType;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
  label,
  name,
  Icon,
  errorMessage,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 relative">
      <label
        htmlFor={name}
        className="text-xs sm:text-sm text-textColor uppercase"
      >
        {label}
      </label>
      <div
        className={`${
          errorMessage ? "border-red-600" : "border-gray-500 "
        } focus-within:border-primary border-2 rounded-lg flex items-center gap-2 overflow-hidden`}
      >
        {Icon && <Icon size={20} className="ml-2" />}

        <input
          id={name}
          className="text-sm sm:text-base outline-none w-full px-2 py-1 "
          {...props}
        />
      </div>

      {errorMessage && (
        <span className="absolute -bottom-5 left-0 text-xxs sm:text-xs text-red-600">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default Input;
