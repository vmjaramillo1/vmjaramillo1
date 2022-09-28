import { memo } from "react";
import GlobalTypography from "@global/GlobalTypography";
import clsx from "clsx";

interface GlobalTypographyFormatProps {
  content: Array<ContentProps>;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "body1" | "body2" | "caption";
  className?: Partial<ClassNameProps>;
}

interface ContentProps {
  text?: string;
  newLine?: boolean;
  className?: string;
}

interface ClassNameProps {
  root?: string;
}

const GlobalTypographyFormat = ({
  variant,
  content,
  className,
  ...props
}: GlobalTypographyFormatProps) => {
  return (
    <GlobalTypography
      variant={variant}
      className={clsx(className?.root)}
      {...props}
    >
      {content.map((item) => {
        return (
          <span
            key={item.text}
            className={clsx("whitespace-pre-wrap", item?.className)}
          >
            {item.newLine && <br />}
            {item.text}
          </span>
        );
      })}
    </GlobalTypography>
  );
};

export default memo(GlobalTypographyFormat);
