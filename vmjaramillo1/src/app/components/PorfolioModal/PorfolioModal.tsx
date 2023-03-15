import React, { useCallback } from "react";
import GlobalTypography from "@global/GlobalTypography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { styled, useTheme } from "@mui/material/styles";
import { TransitionProps } from "@mui/material/transitions";
import useMediaQuery from "@mui/material/useMediaQuery";
import clsx from "clsx";

const location = process.env.PUBLIC_URL;
const CustomDialog = styled(Dialog)(() => ({
  paper: {
    margin: "15px !important",
    width: "100% !important",
    borderRadius: "8px !important",
  },
  ".MuiBackdrop-root": {
    backgroundColor: "#ede0e01c",
  },
}));


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PorfolioModal = (props) => {
  const { open, handleClose, contentInfo } = props;
  const { title, description, imgModal, client, date, category } = contentInfo;

  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.down("tw-md"));

  const handleCloseModal = useCallback(() => {
    handleClose();
  }, []);

  const customdialogProps = () => {
    const customProps: { [k: string]: any } = {
      fullWidth: true,
      maxWidth: "md",
      onClose: handleCloseModal,
    };

    if (matchSm) {
      customProps.fullScreen = matchSm;
      customProps.TransitionComponent = Transition;
    }

    return customProps;
  };

  return (
    <CustomDialog open={open} {...customdialogProps()}>
      <DialogContent className="px-3xl pb-xl">
        <img
          src={location + imgModal}
          className={clsx("h-auto max-h-[] w-auto")}
          alt="alternativo"
        />
        <GlobalTypography className="h4 mb-m mt-m italic text-neutral-alternative1-300">
          {title}
        </GlobalTypography>
        <div className="flex">
          <div className="w-8/12">
            <GlobalTypography
              variant="body1"
              className="italic leading-[1.8rem] text-neutral-alternative1-300"
            >
              {description}
            </GlobalTypography>
          </div>
          <div className="w-2/12 pl-3xl">
            {/* Cliente */}
            <GlobalTypography
              variant="body1"
              className="mb-xs font-semibold italic text-neutral-alternative1-300"
            >
              Cliente
            </GlobalTypography>
            <GlobalTypography
              variant="body2"
              className="text-neutral-alternative1-300"
            >
              {client}
            </GlobalTypography>

            {/* Categoria */}
            <GlobalTypography
              variant="body1"
              className="mb-xs mt-s font-semibold italic text-neutral-alternative1-300"
            >
              Categoria
            </GlobalTypography>
            <GlobalTypography
              variant="body2"
              className="text-neutral-alternative1-300"
            >
              {category}
            </GlobalTypography>

            {/* Fecha */}
            <GlobalTypography
              variant="body1"
              className="mb-xs mt-s font-semibold italic text-neutral-alternative1-300"
            >
              Fecha
            </GlobalTypography>
            <GlobalTypography
              variant="body2"
              className="text-neutral-alternative1-300"
            >
              {date}
            </GlobalTypography>
          </div>
        </div>
      </DialogContent>
    </CustomDialog>
  );
};

export default PorfolioModal;
