import React from "react";
import Typography from "../Typography/index";
import Arrow from '../../../assets/icons/Arrow'
const TopSection = ({className="",title = " Featured art categories",subtitle="View All Categories"}) => {
  return (
    <>
      <div className="py-9 md:flex md:justify-between md:items-center md:pr-5 xl:max-w-[1440px] xl:mx-auto ">
        <Typography variant="h2" className=" font-bold px-5">
         {title}
        </Typography>

        <div className="flex gap-5 pt-3 items-center ">
        <Typography variant="h5" className="text-blue-600  font-semibold pl-5">
          {subtitle}
        </Typography>
        <Arrow/>
        </div>
      </div>
    </>
  );
};

export default TopSection;
