import { Parallax } from "react-parallax";
import GlobalContainer from "@global/GlobalContainer";
import GlobalTypography from "@global/GlobalTypography";
import AOS from "aos";
import background from "app/assets/whatIDo/2.jpg";

AOS.init();

const CiteSection = () => {
  return (
    <section
      id="what-it-section"
      className="h-auto w-full bg-neutral-alternative1-900 bg-cover bg-center py-0"
    >
      <Parallax bgImage={background} strength={300}>
        <GlobalContainer contentSize="xl">
          <div className="flex min-h-screen items-center">
            <blockquote className="mx-auto w-10/12 text-white">
              <i className="font-ElegantIcons text-[150px] not-italic text-primary-500 before:content-['{']" />
              <GlobalTypography
                variant="h3"
                className="mb-m font-Nunito font-medium"
              >
                Do more than is required. What is the distance between someone
                who achieves their goals consistently and those who spend their
                lives and careers merely following? The extra mile.
              </GlobalTypography>
              <span className="border-l-[1px] border-solid border-neutral-alternative1-400 py-[3px] pl-m">
                Kyros Noriaki
              </span>
            </blockquote>
          </div>
        </GlobalContainer>
      </Parallax>
    </section>
  );
};

export default CiteSection;
