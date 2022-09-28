import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import GlobalContainer from "@global/GlobalContainer";
import GlobalHero from "@global/GlobalHero";
import background from "app/assets/Hero/1.jpg";

const heroSectionSection = () => {
  return (
    <section
      id="hero-section"
      className="relative h-auto w-full bg-neutral-alternative1-900 bg-cover bg-center py-0"
    >
      <Parallax bgImage={background} strength={300}>
        <GlobalContainer>
          <GlobalHero />
          <Link smooth spy to="about">
            <span className="mouse transition" id="fly">
              <span className="scroll"> </span>
            </span>
          </Link>
        </GlobalContainer>
      </Parallax>
    </section>
  );
};

export default heroSectionSection;