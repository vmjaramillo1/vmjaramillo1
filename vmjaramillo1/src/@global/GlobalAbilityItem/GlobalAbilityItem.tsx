import GlobalTypography from "@global/GlobalTypography";

const GlobalAbilityItem = (props) => {
  return (
    <div className="w-4/12 border-l-[1px] border-solid border-neutral-alternative1-400 py-l pl-l pr-xl">
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
