import React, { ElementType, ReactNode } from "react";
import clsx from "clsx";

interface GlobalTypographyProps {
  variant?:
    | "h0"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body1"
    | "body2"
    | "caption";
  component?: ElementType;
  className?: string;
  children: ReactNode;
}

const GlobalTypography = ({
  variant,
  component,
  children,
  className,
}: GlobalTypographyProps) => {
  let as: string;
  if (variant === "body1" || variant === "body2") {
    as = "p";
  } else if (variant === "caption") {
    as = "span";
  } else {
    as = variant;
  }

  const Tag = component || as || "div";

  return <Tag className={clsx(variant, className)}>{children}</Tag>;
};

export default GlobalTypography;
