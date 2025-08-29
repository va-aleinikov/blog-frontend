import React from "react";
import { Radio } from "../atoms/Radio";

interface RadioGroupProps {
  options: { label: string; value: string }[];
  name: string;
  selected: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  name,
  selected,
  onChange,
}) => (
  <div>
    {options.map((opt) => (
      <label key={opt.value} style={{ marginRight: "1rem" }}>
        <Radio
          name={name}
          value={opt.value}
          checked={selected === opt.value}
          onChange={onChange}
        />
        {opt.label}
      </label>
    ))}
  </div>
);
