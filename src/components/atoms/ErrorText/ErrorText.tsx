import React from "react";
import "./ErrorText.css";

type ErrorTextProps = React.HTMLAttributes<HTMLParagraphElement>;

export const ErrorText: React.FC<ErrorTextProps> = ({ children, ...props }) => {
  return (
    <p className="error-text" {...props}>
      {children}
    </p>
  );
};
