import React from "react";
import GlobalSpinner from "@global/GlobalSpinner";
import GlobalTypography from "@global/GlobalTypography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import clsx from "clsx";

interface GlobalLoadingProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  open: boolean;
  className?: Partial<ClassNameProps>;
}
interface ClassNameProps {
  root: {
    paper: string;
    backdrop: string;
  };
  title: string;
  subtitle: string;
}

function GlobalLoadingDialog({
  title,
  subtitle,
  children = <GlobalSpinner />,
  open,
  className,
}: GlobalLoadingProps) {
  return (
    <Dialog
      open={open}
      PaperProps={{
        elevation: 0,
        className: clsx("bg-transparent", className?.root?.paper),
      }}
      BackdropProps={{
        className: clsx("bg-white/90", className?.root?.backdrop),
      }}
    >
      <DialogContent className="flex flex-col items-center bg-transparent">
        {children}
        {(title || subtitle) && (
          <div className=" mt-24 text-center">
            <GlobalTypography
              variant="h4"
              className={clsx("mb-16", className?.title)}
            >
              {title}
            </GlobalTypography>
            <GlobalTypography variant="body2" className={className?.subtitle}>
              {subtitle}
            </GlobalTypography>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default GlobalLoadingDialog;
