import { FC, useState } from "react";

interface InputFieldProps {
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  onSubmit: (value: string) => void;
}

export const InputField: FC<InputFieldProps> = ({
  placeholder,
  type,
  onSubmit,
}) => {
  const [subhan, setSubhan] = useState<string>("");

  return (
    // State binding
    <div>
      <div>{subhan}</div>
      <input
        placeholder={placeholder}
        type={type}
        value={subhan}
        onChange={(event) => {
          // This is wrong
          // subhan = event.target.value;
          // The right way to set the state
          setSubhan(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSubmit(subhan);
          }
        }}
      />
    </div>
  );
};
