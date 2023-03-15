import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import GlobalContainer from "@global/GlobalContainer";
import GlobalHero from "@global/GlobalHero";
import background from "app/assets/Hero/1.jpg";

const heroSectionSection = () => {
  return (
    <section
      id="hero-section"
      className="relative h-auto w-full bg-neutral-alternative1-900  from-neutral-alternative1-900 to-transparent bg-cover bg-center py-0 before:absolute
      before:bottom-0 before:left-0 before:z-10 before:h-1/2 before:w-full before:bg-gradient-to-t
      "
    >
      <Parallax bgImage={background} strength={300}>
        <GlobalContainer contentSize="xl">
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
