import GlobalTypography from "@global/GlobalTypography";
import clsx from "clsx";

import { GlobalItemPorfolioProps } from "./GlobalItemPorfolio.interface";

const GlobalItemPorfolio = (props: GlobalItemPorfolioProps) => {
  const { title, body, img, className } = props;

  return (
    <div
      className={clsx(
        "relative overflow-hidden outline-none duration-500 hover:shadow-md",
        className?.root
      )}
    >
      <div
        className={clsx(
          "absolute z-10 flex h-full w-full scale-110  items-center justify-center  "
        )}
      >
        <GlobalTypography
          variant="h3"
          className={clsx("text-white", className?.title)}
        >
          {title}
        </GlobalTypography>
        <GlobalTypography
          variant="body2"
          className={clsx(
            "absolute bottom-l w-full text-center text-white",
            className?.body
          )}
        >
          {body}
        </GlobalTypography>
      </div>

      <img
        alt={img.alt}
        src={img.src}
        className={clsx("custom-grayscale scale-110 rounded-4", className?.img)}
      />
    </div>
  );
};

export default GlobalItemPorfolio;
