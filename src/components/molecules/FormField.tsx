import React from "react";
import { Input } from "../atoms/Input";

interface FormFieldProps {
  label?: string;
  name: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  ...rest
}) => (
  <label>
    {label}
    <Input name={name} type={type} {...rest} />
  </label>
);
