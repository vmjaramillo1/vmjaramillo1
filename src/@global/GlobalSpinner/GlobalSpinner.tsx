import CircularProgress from "@mui/material/CircularProgress";
import clsx from "clsx";

export interface GlobalSpinnerProps {
  size?: number;
  thickness?: number;
  animationDuration?: number;
  className?: Partial<ClassNameProps>;
  disableShrink?: boolean;
  value?: number;
  strokeLinecap?: boolean;
}

export interface ClassNameProps {
  root: string;
  mainCircle: string;
  secondaryCircle: string;
  text: string;
}

const GlobalSpinner = ({
  size = 70,
  thickness = 4,
  animationDuration = 800,
  disableShrink = true,
  value,
  strokeLinecap = true,
  className = { secondaryCircle: "text-neutral-300" },
}: GlobalSpinnerProps) => {
  return (
    <div className={clsx("relative h-fit w-fit", className?.root)}>
      <CircularProgress
        variant="determinate"
        className={className?.secondaryCircle}
        size={size}
        thickness={thickness}
        value={100}
      />
      <CircularProgress
        variant={value >= 0 ? "determinate" : "indeterminate"}
        disableShrink={value >= 0 ? false : true && disableShrink}
        className={className?.mainCircle}
        sx={{
          animationDuration: `${animationDuration}ms`,
          position: "absolute",
          left: 0,
          circle: {
            strokeLinecap: strokeLinecap ? "round" : "",
          },
        }}
        size={size}
        thickness={thickness}
        value={value}
      />
      {value >= 0 && (
        <span
          className={clsx(
            "h5 absolute inset-0 flex items-center justify-center",
            className?.text
          )}
        >
          {`${value}%`}
        </span>
      )}
    </div>
  );
};
export default GlobalSpinner;
