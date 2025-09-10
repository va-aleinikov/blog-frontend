import React from "react";
import "./Input.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = (props) => {
  return <input className="input" {...props} />;
};
