import GlobalContainer from "@global/GlobalContainer/index";
import clsx from "clsx";
// import { Link } from "react-scroll";

interface GlobalHeaderProps {
  logo: Partial<LogoProps>;
  fixed?: boolean;
  className?: Partial<ClassNameProps>;
  children?: any;
}

interface ClassNameProps {
  root: string;
  menu: string;
  img: string;
  link: string;
}

interface LogoProps {
  url: string;
  src: string;
  alt: string;
}

const GlobalHeader = ({
  logo,
  fixed,
  className,
  children,
}: GlobalHeaderProps) => {
  const containterClass = {
    content: "justify-between py-s flex px-s-5xl",
  };

  return (
    <header
      className={clsx(
        "max-h-[82px] shadow-2md",
        fixed && "fixed top-0 z-10 w-full",
        className?.root
      )}
    >
      <GlobalContainer className={containterClass}>
        <a href={logo.url} className={clsx("my-auto", className?.link)}>
          <img
            src={logo.src}
            className={clsx("h-[52px] w-auto", className?.img)}
            alt={logo.alt}
          />
        </a>
        <div className={clsx("my-auto", className?.menu)}>{children}</div>
      </GlobalContainer>
    </header>
  );
};

export default GlobalHeader;
