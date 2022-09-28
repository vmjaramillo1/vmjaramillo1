import GlobalHeader from "@global/GlobalHeader";
import logoImage from "app/assets/Header/logo.png";

import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import HeroSection from "./HeroSection";
import PorfolioSection from "./PorfolioSection";
import SkillsSection from "./SkillsSection";
import WhatidoSection from "./WhatidoSection";

const Home = () => {
  const logo = {
    url: "hero-section",
    src: logoImage,
    alt: "Logo de pagin",
  };

  return (
    <>
      <GlobalHeader
        logo={logo}
        fixed
        className={{ root: "z-20 shadow-none" }}
      />
      <HeroSection />
      <AboutSection />
      <WhatidoSection />
      <SkillsSection />
      <EducationSection />
      <PorfolioSection />
      <ContactSection />
    </>
  );
};

export default Home;