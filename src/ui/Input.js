import { InputMask } from "@react-input/mask";

export const Input = ({
  label = "",
  caption = "",
  placeholder = "",
  value = undefined,
  maxLength,
  onChange = () => {},
  type = "text",
  name = "",
  register = {},
  disabled = false,
}) => {
  return (
    <div className="flex flex-col min-w-[20px] w-full">
      <input
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        className={`h-[44px] flex items-center flex-row px-[12px] text-[#2c2c2c] border-[2px] border-[#a3a3a3] text-[20px] bg-[#fff] placeholder:select-none placeholder:text-[#a3a3a3] leading-[20px]`}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        {...register}
      />

      {caption && (
        <p className="text-[12px] select-none leading-[14px] mt-[3px] text-[#F0BB31]">
          {caption}
        </p>
      )}
    </div>
  );
};

export const InputMaskCustom = ({
  label = "",
  caption = "",
  placeholder = "",
  mask = "+7 (___) ___ __-__",
  replacement = { _: /\d/ },
  name = "",
  register = {},
  disabled = false,
}) => {
  return (
    <div className="flex flex-col min-w-[20px] w-full">
      <InputMask
        className={`h-[44px] flex items-center flex-row px-[12px] text-[#2c2c2c] border-[2px] border-[#a3a3a3] text-[20px] bg-[#fff] placeholder:select-none placeholder:text-[#a3a3a3] leading-[20px]`}
        disabled={disabled}
        name={name}
        mask={mask}
        replacement={replacement}
        placeholder={placeholder}
        {...register}
      />
      {caption && (
        <p className="text-[12px] select-none leading-[14px] mt-[3px] text-[#F0BB31]">
          {caption}
        </p>
      )}
    </div>
  );
};
