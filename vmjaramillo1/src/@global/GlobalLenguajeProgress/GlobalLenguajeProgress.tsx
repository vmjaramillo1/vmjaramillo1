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
    <div className={clsx("block justify-center md:flex", className?.root)}>
      {valueList.map(({ value, text }, index) => (
        <div
          key={index}
          className="mb-2xl text-center md:my-0 md:mx-xl"
          data-aos="fade"
          data-aos-delay={(index + 3) * 100}
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
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
