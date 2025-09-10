import React from "react";
import { Input } from "../atoms/Input/Input";

interface FormFieldProps {
  label?: string;
  name: string;
  type?: string;
  value?: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  ...rest
}) => (
  <label>
    {label}
    <Input placeholder={placeholder} name={name} type={type} {...rest} />
  </label>
);
