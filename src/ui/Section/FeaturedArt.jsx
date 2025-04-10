import React from "react";
import TopSection from "../Common/TopSection";
import WhiteAngel from "../../assets/images/WhiteAngel.jpg";
import Clock from "../../assets/images/Clock.jpg";
import Eurfia from "../../assets/images/Eurfia.jpg";
import VaseFamily from "../../assets/images/VaseFamily.jpg";
import Camel from "../../assets/images/Camel.png";
import Typography from "../Common/Typography";

const FeaturedArt = () => {
  return (
    <>
      <TopSection />
      <section className="w-full mb-15">
        <div className="max-w-[1440px] mx-auto px-5 flex gap-5 overflow-x-auto md:flex md:justify-evenly md:items-center hide-scrollbar">
          
          {/* Card 1 */}
          <div className="relative flex-shrink-0 w-[236px] min-w-[236px]">
            <img
              src={WhiteAngel}
              alt="WhiteAngel"
              className="h-[354px] object-center object-cover rounded w-full"
            />
            <div className="absolute top-0 p-5">
              <Typography variant="p" className="text-white">Pottery</Typography>
              <Typography variant="h4" className="text-white font-bold">Vases Family</Typography>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative flex-shrink-0 w-[236px] min-w-[236px]">
            <img
              src={Clock}
              alt="Clock"
              className="h-[354px] object-center object-cover rounded w-full"
            />
            <div className="absolute top-0 p-5">
              <Typography variant="p" className="text-white">Antique</Typography>
              <Typography variant="h4" className="text-white font-bold">Classic Clock</Typography>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative flex-shrink-0 w-[236px] min-w-[236px]">
            <img
              src={Eurfia}
              alt="Eurfia"
              className="h-[354px] object-center object-cover rounded w-full"
            />
            <div className="absolute top-0 p-5">
              <Typography variant="p" className="text-white">Modern Art</Typography>
              <Typography variant="h4" className="text-white font-bold">Eurfia</Typography>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative flex-shrink-0 w-[236px] min-w-[236px]">
            <img
              src={VaseFamily}
              alt="Vase Family"
              className="h-[354px] object-center object-cover rounded w-full"
            />
            <div className="absolute top-0 p-5">
              <Typography variant="p" className="text-white">Decor</Typography>
              <Typography variant="h4" className="text-white font-bold">Vase Family</Typography>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative flex-shrink-0 w-[236px] min-w-[236px]">
            <img
              src={Camel}
              alt="Vase Family"
              className="h-[354px] object-center object-cover rounded w-full"
            />
          
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedArt;
