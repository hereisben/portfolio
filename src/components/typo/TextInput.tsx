export default function TextInput({
  classNames = "",
  placeHolder = "",
  required,
  type,
  name = "",
  setState,
  value,
}: {
  classNames?: string;
  placeHolder?: string;
  required: boolean;
  type: "text" | "email" | "password";
  setState: (v: string) => void;
  name?: string;
  value: string;
}) {
  return (
    <input
      onChange={(e) => {
        const input = e.target.value;
        setState(input);
      }}
      name={name}
      type={type}
      required={required}
      placeholder={`${placeHolder}`}
      className={`${classNames} w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-primary focus:outline-none transition-colors placeholder:text-neutral-600`}
      value={value}
    ></input>
  );
}
