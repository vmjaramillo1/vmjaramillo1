import { Parallax } from "react-parallax";
import GlobalContainer from "@global/GlobalContainer";
import GlobalTypography from "@global/GlobalTypography";
import AOS from "aos";
import background from "app/assets/whatIDo/2.jpg";

AOS.init();

const CiteSection = () => {
  return (
    <section
      id="cite-section"
      className="relative h-auto w-full bg-neutral-alternative1-900 from-neutral-alternative1-900 from-neutral-alternative1-900 to-transparent to-transparent bg-cover bg-center
      py-0 before:absolute before:bottom-0 before:left-0 before:z-10 before:h-1/6 before:w-full
      before:bg-gradient-to-t after:absolute after:top-0
      after:left-0 after:z-10 after:h-1/6 after:w-full after:bg-gradient-to-b md:before:h-1/2 md:after:h-1/2"
    >
      <Parallax className="pb-9xl" bgImage={background} strength={300}>
        <GlobalContainer className={{ root: "py-m" }} contentSize="xl">
          <div
            className="flex items-center pt-5xl pb-5xl"
            data-aos="fade"
            data-aos-delay="350"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <blockquote className="mx-auto w-10/12 text-white">
              <i className="font-ElegantIcons text-[150px] not-italic text-primary-500 before:content-['{']" />
              <GlobalTypography className="h2 md:h3 mb-m font-Nunito font-medium">
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
