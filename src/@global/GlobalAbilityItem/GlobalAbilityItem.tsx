import GlobalTypography from "@global/GlobalTypography";

const GlobalAbilityItem = (props) => {
  return (
    <div
      className="ml-m border-l-[1px] border-solid border-neutral-alternative1-400 py-l px-l  md:ml-0 md:w-4/12  md:pl-l  md:pr-xl"
      data-aos="fade"
      data-aos-delay={(props.id + 3) * 100}
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="mb-m flex">
        {props.icon}
        <GlobalTypography
          variant="h4"
          className="mt-auto leading-[1.8rem] text-white"
        >
          {props.title}
        </GlobalTypography>
      </div>

      <GlobalTypography
        variant="body1"
        className=" text-left leading-[1.8rem] text-neutral-alternative1-300"
      >
        {props.description}
      </GlobalTypography>
    </div>
  );
};

export default GlobalAbilityItem;
