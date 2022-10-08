import GlobalAbilityItem from "@global/GlobalAbilityItem";
import GlobalContainer from "@global/GlobalContainer";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AOS from "aos";

AOS.init();

const WhatidoSection = () => {
  const abilityInfo = [
    {
      icon: <EngineeringIcon className="h-xl w-xl pr-m text-primary-500" />,
      title: "Branding",
      description:
        "Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure",
    },
    {
      icon: <EngineeringIcon className="h-xl w-xl pr-m text-primary-500" />,
      title: "Branding",
      description:
        "Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure",
    },
    {
      icon: <EngineeringIcon className="h-xl w-xl pr-m text-primary-500" />,
      title: "Branding",
      description:
        "Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure",
    },
  ];

  return (
    <section
      id="what-it-section"
      className="h-auto w-full bg-neutral-alternative1-900 bg-cover bg-center py-0"
    >
      <GlobalContainer contentSize="xxl">
        <div className="flex min-h-screen items-center">
          <div className="grid grid-cols-12 ">
            {/* TITLE SECCTION */}
            <div className="col-span-full mb-l text-center">
              <h2
                className="mb-16 text-white"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease"
                data-aos-once="true"
              >
                What I Do
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
            <div className="col-span-full flex text-center md:px-11xl">
              {abilityInfo.map((item) => {
                return <GlobalAbilityItem {...item} />;
              })}
            </div>
          </div>
        </div>
      </GlobalContainer>
    </section>
  );
};

export default WhatidoSection;
