import { useEffect, useState } from "react";
import GlobalFooter from "@global/GlobalFooter";
import GlobalHeader from "@global/GlobalHeader";
import Link from "@mui/material/Link";
import logoImage from "app/assets/Header/logo.png";
import sharedIndo from "app/data/containers/shared.json";

import AboutSection from "./AboutSection";
import CiteSection from "./CiteSection";
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import HeroSection from "./HeroSection";
import PorfolioSection from "./PorfolioSection";
import WhatidoSection from "./WhatidoSection";

const logo = {
  url: "hero-section",
  src: logoImage,
  alt: "Logo de pagin",
};

const menu = (
  <>
    <Link
      href="http://localhost:3006/vmjaramillo1"
      variant="body2"
      className="body2 font-semibold text-white "
    >
      Home
    </Link>
    <Link
      href="#about-section"
      variant="body2"
      className="body2 font-semibold text-white"
    >
      About me
    </Link>
    <Link
      href="http://localhost:3006/vmjaramillo1"
      variant="body2"
      className="body2 font-semibold text-white"
    >
      What I Do
    </Link>
    <Link
      href="http://localhost:3006/vmjaramillo1"
      variant="body2"
      className="body2 font-semibold text-white"
    >
      Portofolio
    </Link>
    <Link
      href="http://localhost:3006/vmjaramillo1"
      variant="body2"
      className="body2 font-semibold text-white"
    >
      My resume
    </Link>
    <Link
      href="http://localhost:3006/vmjaramillo1"
      variant="body2"
      className="body2 font-semibold text-white"
    >
      Contact Me
    </Link>
  </>
);

const Home = () => {
  const [isScroll, setIsScroll] = useState(false);

  const onScrollHandler = (e: Event) => {
    if (!e.target) return;

    const header = document.getElementById("test");
    const sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScrollHandler);
    return () => {
      document.removeEventListener("scroll", onScrollHandler);
    };
  }, []);

  return (
    <>
      <GlobalHeader
        logo={logo}
        fixed
        className={{
          root: `z-20 shadow-none ${isScroll ? "bg-neutral-600" : ""} `,
          img: "h-[36px]",
        }}
        id="test"
      >
        {menu}
      </GlobalHeader>
      <HeroSection />
      <AboutSection />
      <CiteSection />
      <WhatidoSection />
      <PorfolioSection />
      <EducationSection />
      <ContactSection />
      <GlobalFooter
        {...sharedIndo.footerSeccion}
        className={{
          root: "border-t border-t-neutral-alternative1-600 bg-neutral-alternative1-900",
          rightsReserved: "text-neutral-400",
          platformInfo: "text-neutral-400",
        }}
      />
    </>
  );
};

export default Home;
