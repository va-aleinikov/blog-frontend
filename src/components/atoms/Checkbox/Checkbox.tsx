// src/components/atoms/Checkbox.tsx
import React from "react";
import "./Checkbox.css";
type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <div className="checkbox">
      <input
        className="checkbox-input"
        type="checkbox"
        id="checkbox"
        {...props}
      />
      <label className="checkbox-label" htmlFor="checkbox">
        policy
      </label>
    </div>
  );
};
