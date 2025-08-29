import React from "react";
import { colors, spacing, typography, radius } from "../../styles/global";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  const styles = {
    primary: {
      backgroundColor: colors.primary,
      color: colors.text,
    },
    secondary: {
      backgroundColor: colors.secondary,
      color: colors.text,
    },
    danger: {
      backgroundColor: colors.danger,
      color: colors.text,
    },
  };

  return (
    <button
      {...props}
      style={{
        padding: `${spacing.xs}`,
        fontSize: `${typography.fontSize.base}`,
        background: `${colors.light}`,
        borderRadius: radius.sm,
        border: "none",
        cursor: "pointer",
        ...styles[variant],
      }}
    >
      {children}
    </button>
  );
};
