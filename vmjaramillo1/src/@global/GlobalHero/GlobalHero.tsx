import React from "react";
import Typed from "react-typed";
import GlobalTypography from "@global/GlobalTypography";
import AOS from "aos";

AOS.init({
  offset: 200,
  duration: 800,
  easing: "ease-in-out-sine",
  delay: 200,
  mirror: true,
});

const GlobalHero = () => {
  return (
    <div className="flex min-h-screen items-center">
      <div className="block">
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <GlobalTypography
            variant="body1"
            className="font-semibold text-primary-500"
          >
            I Am Kyros Noriaki
          </GlobalTypography>
        </div>

        <div className="clear-both block h-24 w-full" />
        <div
          className="relative left-[-3px] top-[-10px] uppercase text-white"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <GlobalTypography className="h0">
            <Typed
              strings={["FREELANCER ", "PROGAMMER", "PHOTOGRAPHER"]}
              typeSpeed={60}
              backSpeed={50}
              loop
            />
          </GlobalTypography>
        </div>
        {/* countries */}
        <ul
          className="list-none text-neutral-alternative1-300"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <li className="mr-32 inline-block list-none border-l border-solid border-neutral-400 py-2xs pr-0 pl-[10px]">
            <GlobalTypography variant="body1">
              <span className="block pb-8 font-semibold text-white">
                France
              </span>
              Bodin, Chauveau
            </GlobalTypography>
          </li>
          <li className="mr-32 inline-block list-none border-l border-solid border-neutral-400 py-2xs pr-0 pl-[10px]">
            <span className="block pb-8 font-semibold text-white">USA</span>
            Louisiana, Bayerfurt
          </li>
          <li className="mr-32 inline-block list-none border-l border-solid border-neutral-400 py-2xs pr-0 pl-[10px]">
            <span className="block pb-8 font-semibold text-white">German</span>
            Hamburg, Dortmund
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GlobalHero;
