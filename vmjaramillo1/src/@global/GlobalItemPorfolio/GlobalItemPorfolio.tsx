import GlobalTypography from "@global/GlobalTypography";
import clsx from "clsx";

import { GlobalItemPorfolioProps } from "./GlobalItemPorfolio.interface";

const GlobalItemPorfolio = (props: GlobalItemPorfolioProps) => {
  const { title, body, img, className } = props;

  return (
    <div
      className={clsx(
        "group custom-grayscale relative overflow-hidden outline-none duration-500 hover:custom-grayscale-reset hover:shadow-md",
        className?.root
      )}
    >
      <div
        className={clsx(
          " absolute z-10 flex h-full w-full items-center justify-center opacity-0 duration-500  hover:scale-100 hover:opacity-100"
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
        className={clsx(
          "scale-110 rounded-4 duration-500 group-hover:scale-100",
          className?.img
        )}
      />
    </div>
  );
};

export default GlobalItemPorfolio;
