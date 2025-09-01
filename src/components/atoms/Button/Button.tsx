// src/components/atoms/Button.tsx
import React from "react";
import "./Button.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  return (
    <button className={`btn btn--${variant}`} {...props}>
      {children}
    </button>
  );
};
