import { ReactNode } from "react";
import clsx from "clsx";

interface GlobalContainerProps {
  children: ReactNode | ReactNode[];
  contentSize?: "sm" | "md" | "lg" | "xl" | "xxl" | "full";
  className?: Partial<ClassNameProps>;
}

interface ClassNameProps {
  root: string;
  content: string;
}

const maxWidthFromSize = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  xxl: "max-w-screen-xxl",
  full: "max-w-full",
  default: "max-w-container",
};

const GlobalContainer = (props: GlobalContainerProps) => {
  const { children, contentSize, className } = props;

  const buildContentSize = contentSize
    ? maxWidthFromSize[contentSize]
    : maxWidthFromSize.default;

  return (
    <div className={className?.root}>
      <div
        className={clsx(
          "mx-auto box-border px-s-5xl",
          buildContentSize,
          className?.content
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default GlobalContainer;
