import React from "react";
import { colors, spacing, typography } from "../../styles/global";

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
        // background
        // borderRadius: radius.md,
        // fontFamily: typography.fontFamily,
        // fontSize: typography.fontSize.base,
        // fontWeight: typography.fontWeight.medium,
        border: "none",
        cursor: "pointer",
        ...styles[variant],
      }}
    >
      {children}
    </button>
  );
};
// export const Button = styled.button`
//   padding: 0.75rem;
//   font-size: 1rem;
//   background: #007bff;
//   color: white;
//   border: none;
//   cursor: pointer;
//   border-radius: 4px;
// `;
