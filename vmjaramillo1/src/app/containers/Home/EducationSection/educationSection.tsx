import GlobalContainer from "@global/GlobalContainer";
import GlobalEducationItem from "@global/GlobalEducationItem";
import GlobalTypography from "@global/GlobalTypography";
import AOS from "aos";

AOS.init();

const educationItems = [
  {
    index: 1,
    dateTitle: "2022 - now",
    title: "Senior UI / UX Designer",
    subtitle: "Google Inc",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.",
  },
  {
    index: 2,
    dateTitle: "2010 - 2014  ",
    title: "Founder & Creative Director",
    subtitle: "Kyros Studio",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.",
  },
  {
    index: 3,
    dateTitle: "2008 - 2010",
    title: "Graphic Designer",
    subtitle: "Kyros Studio",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.",
  },
];

const educationSection = () => {
  return (
    <section
      id="education-section"
      className="bg-neutral-alternative1-900 pb-0"
    >
      <GlobalContainer contentSize="xl">
        <div className="flex min-h-screen items-center">
          <div className="grid grid-cols-12 gap-x-m-l">
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
                My Resume
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

            <div className="col-span-6">
              <GlobalTypography
                variant="h2"
                className="mb-l leading-[1.8rem] text-neutral-alternative1-300"
              >
                Experiences
              </GlobalTypography>

              {educationItems.map((item) => (
                <GlobalEducationItem
                  index={item.index}
                  dateTitle={item.dateTitle}
                  title={item.title}
                  subtitle={item.subtitle}
                  body={item.body}
                />
              ))}
            </div>
            <div className="col-span-6">
              <GlobalTypography
                variant="h2"
                className="mb-l leading-[1.8rem] text-neutral-alternative1-300"
              >
                Education
              </GlobalTypography>
              {educationItems.map((item) => (
                <GlobalEducationItem
                  index={item.index}
                  dateTitle={item.dateTitle}
                  title={item.title}
                  subtitle={item.subtitle}
                  body={item.body}
                />
              ))}
            </div>
          </div>
        </div>
      </GlobalContainer>
    </section>
  );
};

export default educationSection;
