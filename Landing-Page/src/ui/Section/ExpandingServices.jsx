import React from "react";
import ArcuIcon from "../../assets/icons/ArcuIcon";
import CrasIcon from "../../assets/icons/CrasIcon";
import CursusIcon from "../../assets/icons/CursusIcon";
import QuisqueIcon from "../../assets/icons/QuisqueIcon";
import FermentumIcon from "../../assets/icons/FermentumIcon";
import NibhIcon from "../../assets/icons/NibhIcon";
import Typography from "../Common/Typography";
import Button from "../Common/Button";
const ExpandingServices = () => {
    return (
      <section className="my-[3rem] lg:mt-[6rem]">
        <Typography variant="h2" className="font-bold text-center">
          Expanding Services
        </Typography>
  
        <div className="px-5 py-8 ">
         
          <div className="grid grid-cols-3 gap-y-6 md:grid-cols-6 md:gap-y-0">
            <div className="flex flex-col items-center">
              <NibhIcon />
              <div className="text-sm font-medium flex flex-col md:flex-row md:space-x-1 text-center pt-2">
                <span>Nibh</span>
                <span>viverra</span>
              </div>
            </div>
  
            <div className="flex flex-col items-center">
              <CursusIcon />
              <div className="text-sm font-medium flex flex-col md:flex-row md:space-x-1 text-center pt-2">
                <span>Cursus</span>
                <span>amet</span>
              </div>
            </div>
  
            <div className="flex flex-col items-center">
              <FermentumIcon />
              <div className="text-sm font-medium flex flex-col md:flex-row md:space-x-1 text-center pt-2">
                <span>Ipsum</span>
                <span>fermentum</span>
              </div>
            </div>
  
            <div className="flex flex-col items-center">
              <QuisqueIcon />
              <div className="text-sm font-medium flex flex-col md:flex-row md:space-x-1 text-center pt-2">
                <span>Quisque</span>
                <span>euismod</span>
              </div>
            </div>
  
            <div className="flex flex-col items-center">
              <ArcuIcon />
              <div className="text-sm font-medium flex flex-col md:flex-row md:space-x-1 text-center pt-2">
                <span>Arcu</span>
                <span>vulputate</span>
              </div>
            </div>
  
            <div className="flex flex-col items-center">
              <CrasIcon />
              <div className="text-sm font-medium flex flex-col md:flex-row md:space-x-1 text-center pt-2">
                <span>Cras</span>
                <span>auctor</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
        <Button className="py-3 ">Find services</Button>
        </div>
        </div>

      </section>
    );
  };
  

  export default ExpandingServices;