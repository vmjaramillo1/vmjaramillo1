import GlobalContainer from "@global/GlobalContainer";
import GlobalLenguajeProgress, {
  GlobalLenguajeProgressProps,
} from "@global/GlobalLenguajeProgress";
import GlobalTypography from "@global/GlobalTypography";
import AOS from "aos";

AOS.init();

const intiialValues: GlobalLenguajeProgressProps = {
  valueList: [
    { value: 70, text: "Test" },
    { value: 50, text: "Test" },
    { value: 80, text: "Test" },
    { value: 90, text: "Test" },
  ],
  individualSpiner: {
    thickness: 1.5,
    size: 200,
  },
  className: {
    individualSpiner: {
      root: "mx-auto",
      text: "body1 text-white",
      mainCircle: "text-primary-400",
      secondaryCircle: "text-neutral-500",
    },
  },
};

const aboutSection = () => {
  return (
    <section id="about-section" className="bg-neutral-alternative1-900 pb-0">
      <GlobalContainer contentSize="xl">
        <div className="flex min-h-screen items-center">
          <div className="grid grid-cols-12 ">
            {/* TITLE SECCTION */}
            <div className="col-span-full text-center">
              <h2
                className="mb-16 text-white"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease"
                data-aos-once="true"
              >
                About Me
              </h2>
              <div
                className="relative mx-auto mb-40 h-[1px] w-32 bg-primary-500 before:absolute before:left-[-40px] before:h-[1px] before:w-32 before:bg-neutral-alternative1-400 after:absolute after:right-[-40px] after:h-[1px] after:w-32 after:bg-neutral-alternative1-400"
                data-aos="fade-up"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease"
                data-aos-once="true"
              />
            </div>
            <div className="col-span-full">
              <div className="mx-auto mb-2xl w-7/12 text-center">
                <GlobalTypography
                  variant="body1"
                  className="leading-[1.8rem] text-neutral-alternative1-300"
                >
                  I am a website designer from Lousiana, with a strong focus in
                  UI/UX design. I love to get new experiences and always learn
                  from my surroundings. Ive done more than 285 projects. You can
                  check it through portfolio section on this website. I looking
                  forward to any opportunities and challenges.
                </GlobalTypography>
              </div>
            </div>
            <div className="col-span-full">
              <div>
                <GlobalLenguajeProgress {...intiialValues} />
              </div>
            </div>
          </div>
        </div>
      </GlobalContainer>
    </section>
  );
};

export default aboutSection;
