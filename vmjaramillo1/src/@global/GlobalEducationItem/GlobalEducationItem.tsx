import React from "react";
import GlobalTypography from "@global/GlobalTypography";
import Avatar from "@mui/material/Avatar";

const GlobalEducationItem = (props) => {

  const {index, dateTitle, title, subtitle, body} = props;

  return (
    <div className="">
      <div className="flex">
        <Avatar className="absolute bg-primary-500 text-white ">
          <GlobalTypography
            variant="h5"
            className="text-[14px] font-normal text-white"
          >
            {index}
          </GlobalTypography>
        </Avatar>
        <div className="h-40 w-full rounded-l-full  bg-gradient-to-r from-[#ffffff1a] pl-56">
          <GlobalTypography
            variant="h5"
            className="flex h-full items-center text-[14px] font-normal text-white"
          >
            {dateTitle}
          </GlobalTypography>
        </div>
      </div>
      <div className="ml-s border-l py-m px-l">
        <GlobalTypography variant="h5" className="mb-xs text-white">
          {title}
        </GlobalTypography>
        <GlobalTypography variant="body1" className="mb-s text-primary-500">
          {subtitle}
        </GlobalTypography>
        <GlobalTypography
          variant="body1"
          className="leading-[1.8rem] text-neutral-300"
        >
          {body}
        </GlobalTypography>
      </div>
    </div>
  );
};

export default GlobalEducationItem;
