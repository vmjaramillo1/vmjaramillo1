import React from "react";
import GlobalSpinner from "@global/GlobalSpinner";
import GlobalTypography from "@global/GlobalTypography";
import clsx from "clsx";

import { GlobalLenguajeProgressProps } from "./GlobalLenguajeProgress.interface";

const GlobalLenguajeProgress = ({
  valueList,
  className,
  individualSpiner,
}: GlobalLenguajeProgressProps) => {
  return (
    <div className={clsx("flex justify-center", className?.root)}>
      {valueList.map(({ value, text }, index) => (
        <div key={index} className="mx-2xl text-center">
          <GlobalSpinner
            value={value}
            thickness={individualSpiner.thickness}
            size={individualSpiner.size}
            className={className?.individualSpiner}
          />
          <GlobalTypography
            variant="h5"
            className="mt-8 leading-[1.8rem] text-white"
          >
            {text}
          </GlobalTypography>
        </div>
      ))}
    </div>
  );
};

export default GlobalLenguajeProgress;
