import React from "react";
import TopSection from "../Common/TopSection";
import WildHorse from "../../assets/images/WildHorse.png";
import GreatColors from "../../assets/images/GreatColors.png";
import FathersDay from "../../assets/images/FathersDay.png";
import Typography from "../Common/Typography";
const ArtEvents = () => {
  return (
    <>  
        <TopSection title="Art Events" subtitle="Explore All Events" />
      <section className="md:grid md:grid-cols-3 lg:max-w-[1440px] lg:mx-auto mb-[3rem]">
      <div className="px-3">
        <img src={WildHorse} alt="WildHorse" className="w-full " />
        <Typography variant="h3" className=" font-bold pt-5">
          Wild Horse Event
        </Typography>
        <Typography variant="h6" className="pb-5 md:text-[0.9rem]">
          Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
        </Typography>
      </div>

      <div className="px-3">
        <img src={GreatColors} alt="GreatColors" className="w-full"/>
        <Typography variant="h3" className=" font-bold pt-5">
          Great Colors
        </Typography>
        <Typography variant="h6" className="pb-5 md:text-[0.9rem]">
          Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
        </Typography>
      </div>

      <div className="px-3">
        <img src={FathersDay} alt="FathersDay" className="w-full " />
        <Typography variant="h3" className=" font-bold pt-5">
          Happy Father’s Day
        </Typography>
        <Typography variant="h6" className="pb-5 md:text-[0.9rem]">
          Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
        </Typography>
      </div>
    </section>
    </> 
  );
};

export default ArtEvents;
