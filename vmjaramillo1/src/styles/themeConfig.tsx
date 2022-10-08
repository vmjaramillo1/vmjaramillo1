// When using TypeScript 4.x and above
import type {} from "@mui/lab/themeAugmentation";
import { createTheme, ThemeOptions } from "@mui/material/styles";
// eslint-disable-next-line no-restricted-imports
import { Shadows } from "@mui/material/styles/shadows";
import colors from "styles/config-colors";
import fluidSpacing from "styles/config-fluid-spacing";

// When using TypeScript 3.x and below
import "@mui/lab/themeAugmentation";

const {
  neutral,
  white,
  black,
  primary,
  secondary,
  info,
  success,
  warning,
  error,
} = colors;
const initialAlternative = "400";

const themeOptions: ThemeOptions = {
  palette: {
    background: {
      default: black,
      paper: black,
    },
    primary: {
      main: primary.alternative4[initialAlternative],
      dark: primary.alternative2[700],
      contrastText: secondary.alternative4[900],
    },
    secondary: {
      main: secondary.alternative1[400],
      dark: primary[200],
      contrastText: secondary.alternative4[900],
    },
    error: {
      main: error[500],
    },
    action: {
      disabledBackground: neutral[100],
      disabled: neutral[500],
    },
    complementary: {
      main: primary.alternative1[500],
      contrastText: white,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: Array(25).fill("none") as Shadows,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          textTransform: "none",
          borderWidth: "2px !important",
          ":hover": {
            borderWidth: "2px ",
          },
        },
        containedPrimary: {
          backgroundColor: primary[500],
          color: primary.alternative1[500],
          ":hover": {
            backgroundColor: primary[700],
          },
          ":active": {
            backgroundColor: primary[900],
          },
          "&.Mui-disabled": {
            backgroundColor: `${primary[200]} !important`,
            color: `${primary.alternative1[200]} !important`,
          },
        },
        outlinedPrimary: {
          backgroundColor: colors.transparent,
          color: primary.alternative1[500],
          borderColor: primary.alternative1[500],
          ":hover": {
            backgroundColor: secondary.alternative3[200],
            borderColor: secondary.alternative3[200],
          },
          ":active": {
            backgroundColor: secondary.alternative3[400],
            borderColor: primary.alternative1[500],
          },
          "&.Mui-disabled": {
            borderColor: `${primary.alternative1[100]} !important`,
            backgroundColor: colors.transparent,
            color: neutral[300],
          },
        },
        textPrimary: {
          color: info[500],
          backgroundColor: colors.transparent,
          ":hover": {
            backgroundColor: colors.transparent,
            color: info[500],
          },
          ":active": {
            backgroundColor: colors.transparent,
            color: info[500],
          },
          "&.Mui-disabled": {
            backgroundColor: colors.transparent,
            color: neutral["400"],
          },
        },
        containedSecondary: {
          color: primary.alternative1[600],
          backgroundColor: secondary.alternative3[200],
          borderColor: `${secondary.alternative3[300]} !important`,
          border: "1.5px solid",
          ":hover": {
            backgroundColor: secondary.alternative3[500],
            borderColor: secondary.alternative3[600],
          },
          ":active": {
            backgroundColor: secondary.alternative3[900],
          },
          "&.Mui-disabled": {
            borderWidth: "0 !important",
            backgroundColor: `${secondary.alternative3[100]} !important`,
            color: `${primary.alternative1[200]} !important`,
          },
        },
        outlinedSecondary: {
          backgroundColor: colors.transparent,
          color: secondary["400"],
          borderColor: secondary["500"],
          ":hover": {
            backgroundColor: colors.transparent,
            color: secondary["300"],
            borderColor: secondary["300"],
          },
          ":active": {
            backgroundColor: colors.transparent,
            color: colors.secondary["500"],
            borderColor: colors.secondary["500"],
          },
          ":disabled": {
            borderColor: colors.neutral["500"],
            backgroundColor: colors.neutral["50"],
          },
        },
        textSecondary: {
          color: colors.secondary["400"],
          backgroundColor: colors.transparent,
          ":hover": {
            backgroundColor: colors.transparent,
            color: colors.secondary["300"],
          },
          ":active": {
            backgroundColor: colors.transparent,
            color: colors.secondary["500"],
          },
          ":disabled": {
            backgroundColor: colors.transparent,
            color: colors.neutral["400"],
          },
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "complementary" },
          style: {
            backgroundColor: primary.alternative1[500],
            color: colors.white,
            border: "1.5px solid",
            borderColor: primary.alternative1[500],

            ":hover": {
              backgroundColor: primary.alternative1[600],
            },
            ":active": {
              backgroundColor: primary.alternative1[900],
            },
            "&.Mui-disabled": {
              backgroundColor: `${primary.alternative1["200"]} !important`,
              color: `${primary.alternative1[100]} !important`,
            },
          },
        },
      ],
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          ":hover": {
            border: "solid ",
            borderWidth: "1px",
            borderColor: `${colors.info[500]} !important`,
          },
          " &.Mui-selected": {
            border: "solid !important",
            borderWidth: "2px",
            backgroundColor: `${colors.secondary.alternative3[100]} !important`,
            borderColor: `${colors.info[500]} !important`,
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: colors.primary.alternative1[500],
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${colors.neutral[initialAlternative]}`,
          "&:before": {
            display: "none",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: 0,
          padding: 0,
          backgroundColor: colors.neutral.alternative1[initialAlternative],
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(180deg)",
          },
        },
        content: {
          margin: 0,
        },
        expandIconWrapper: { color: colors.primary[initialAlternative] },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: 0,
          "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: 2,
            transitionDuration: "300ms",
            "&.Mui-checked": {
              transform: "translateX(16px)",
              color: "#fff",
              "& + .MuiSwitch-track": {
                opacity: 1,
                border: 0,
              },
              "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
              },
            },
            "&.Mui-focusVisible .MuiSwitch-thumb": {
              border: "6px solid #fff",
            },
            "&.Mui-disabled + .MuiSwitch-track": {
              opacity: 0.3,
            },
          },
          "& .MuiSwitch-thumb": {
            boxSizing: "border-box",
            width: 22,
            height: 22,
          },
          "& .MuiSwitch-track": {
            borderRadius: 26 / 2,
            opacity: 1,
          },
        },
        sizeSmall: {
          height: 40,
        },
        sizeMedium: {
          width: 42,
          height: 26,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            padding: fluidSpacing.s,
            paddingRight: fluidSpacing.xs,
          },
          "& .MuiInputBase-adornedStart": {
            paddingLeft: fluidSpacing.s,
            input: {
              paddingLeft: 0,
            },
          },
          "& .MuiInputBase-adornedEnd": {
            paddingRight: fluidSpacing.xs,
            input: {
              paddingRight: 0,
            },
          },
          "& .MuiInputAdornment-root": {
            svg: {
              width: fluidSpacing.m,
              height: fluidSpacing.m,
            },
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
            "& fieldset": {
              borderColor: colors.neutral[400],
            },
            "&:hover fieldset": {
              borderColor: colors.neutral[500],
            },
            "&.Mui-focused fieldset": {
              border: "1px solid",
              borderColor: colors.neutral[900],
            },
            "&.Mui-error": {
              "&.Mui-focused fieldset": {
                border: "1px solid",
                borderColor: colors.neutral[900],
              },
              "&:hover fieldset": {
                border: "1px solid",
                borderColor: colors.neutral[900],
              },
            },
            "&.Mui-disabled": {
              fieldset: {
                borderColor: colors.neutral[400],
                backgroundColor: colors.neutral[50],
                zIndex: -10,
              },
              "&:hover fieldset": {
                borderColor: colors.neutral[400],
                backgroundColor: colors.neutral[50],
              },
            },
          },
        },
      },
    },
  },
};

const themeConfig = createTheme(themeOptions);
export default themeConfig;

declare module "@mui/material/styles" {
  interface Palette {
    complementary: Palette["primary"];
  }
  interface PaletteOptions {
    complementary: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    complementary: true;
  }
}
