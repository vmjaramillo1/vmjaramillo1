import GlobalContainer from "@global/GlobalContainer";
import GlobalTypographyFormat from "@global/GlobalTypographyFormat";
import clsx from "clsx";

interface GlobalFooterProps {
  rightsReserved?: Array<object>;
  platformInfo?: Array<object>;
  platformLogo: Partial<ImageProps>;
  className?: Partial<ClassNameProps>;
}

interface ClassNameProps {
  root: string;
  img: string;
  rightsReserved: string;
  platformInfo: string;
}

interface ImageProps {
  src: string;
  alt: string;
}

const GlobalFooter = ({
  platformLogo,
  rightsReserved,
  platformInfo,
  className,
}: GlobalFooterProps) => {
  const containterClass = {
    content:
      "block justify-center py-s text-center md:flex md:justify-between px-s-5xl",
  };

  return (
    <footer className={clsx("w-full", className?.root)}>
      <GlobalContainer className={containterClass}>
        <GlobalTypographyFormat
          variant="body2"
          content={rightsReserved}
          className={{ root: clsx("font-medium", className?.rightsReserved) }}
        />
        <div className="flex justify-center md:justify-end">
          <GlobalTypographyFormat
            variant="body2"
            content={platformInfo}
            className={{ root: clsx("font-medium", className?.platformInfo) }}
          />
          <img
            src={platformLogo.src}
            className={clsx(
              "my-auto ml-[4px] h-[11.69] w-[41px]",
              className?.img
            )}
            alt={platformLogo.alt}
          />
        </div>
      </GlobalContainer>
    </footer>
  );
};

export default GlobalFooter;
