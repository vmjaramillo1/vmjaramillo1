import React from "react";
import Typed from "react-typed";
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
        <h5
          className="text-primary-500"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          I Am Kyros Noriaki
        </h5>

        <div className="clear-both block h-24 w-full" />
        <div
          className="relative left-[-3px] top-[-10px] mb-16 uppercase text-white"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <h1>
            <Typed
              strings={["FREELANCER ", "PROGAMMER", "PHOTOGRAPHER"]}
              typeSpeed={60}
              backSpeed={50}
              loop
            />
          </h1>
        </div>
        <ul
          className="list-none text-white"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <li className="mr-32 inline-block list-none border-l-2 border-solid border-neutral-400 p-0 pl-16">
            <span className="block pb-8 font-semibold ">France</span>Bodin, Chauveau
          </li>
          <li className="mr-32 inline-block list-none border-l-2 border-solid border-neutral-400 p-0 pl-16">
            <span className="block pb-8">USA</span>Louisiana, Bayerfurt
          </li>
          <li className="mr-32 inline-block list-none border-l-2 border-solid border-neutral-400 p-0 pl-16">
            <span className="block pb-8">German</span>Hamburg, Dortmund
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GlobalHero;
