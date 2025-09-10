// src/components/atoms/Heading.tsx
import React from "react";
import "./Heading.css";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  ...props
}) => {
  const Tag: React.ElementType = `h${level}`;

  return (
    <Tag className="heading" {...props}>
      {children}
    </Tag>
  );
};
