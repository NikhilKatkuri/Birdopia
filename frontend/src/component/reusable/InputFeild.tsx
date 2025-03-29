import { FC } from "react";

interface PropType {
  className?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  id?:string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<PropType> = ({
  className = "",
  placeholder = "Enter text",
  type = "text",
  id="",
  value,
  onChange,
}) => {
  return (
    <input
      className={`h-12 sm:h-11 bg-gray-50/5 placeholder:text-slate-500 text-slate-50  px-2 rounded-md outline-0 focus:border-slate-500 w-full border-2 border-white/0 ${className}`}
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default InputField;
