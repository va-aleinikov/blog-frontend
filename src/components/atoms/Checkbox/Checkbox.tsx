// src/components/atoms/Checkbox.tsx
import React, { useId } from "react";
import "./Checkbox.css";
type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const id = useId();
  return (
    <div className="checkbox">
      <input className="checkbox-input" type="checkbox" id={id} {...props} />
      <label className="checkbox-label" htmlFor="checkbox">
        policy
      </label>
    </div>
  );
};
