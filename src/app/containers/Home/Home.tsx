import { useEffect, useState } from "react";
import GlobalFooter from "@global/GlobalFooter";
import GlobalHeader from "@global/GlobalHeader";
import logoImage from "app/assets/Header/logo1.svg";
import MenuDesk from "app/components/MenuDesk";
import MenuMobile from "app/components/MenuMobile";
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

  const menu = (
    <>
      <MenuDesk className="hidden md:block" />
      <MenuMobile className="block md:hidden" />
    </>
  );
  return (
    <>
      <GlobalHeader
        logo={logo}
        fixed
        className={{
          root: `z-20 shadow-none ${
            isScroll ? "bg-neutral-alternative1-900" : ""
          } `,
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
          root: "border-t border-t-neutral-alternative1-600 bg-neutral-alternative1-900 py-s",
          rightsReserved: "!body1 text-neutral-400",
          platformInfo: "!body1 text-neutral-400",
        }}
      />
    </>
  );
};

export default Home;
