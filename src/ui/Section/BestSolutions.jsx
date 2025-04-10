import React from "react";
import ColorFace from "../../assets/images/ColorFace.png";
import Desktop from "../../assets/images/Desktop.png";
import Boy from "../../assets/images/Boy.png";
import Girl from "../../assets/images/Girl.png";
import Typography from "../Common/Typography/index.jsx";
import { Check } from "lucide-react";

const BestSolutions = () => {
  return (
    <section className="bg-gray-600 pb-[5rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto px-5 lg:max-w-[1440px] lg:mx-auto">
        <div className="relative md:order-2 flex">
          <div>
            <img
              src={ColorFace}
              alt="Face"
              className=" pt-9 left-0 md:w-[18rem] lg:w-[22rem] "
            />

            <img
              src={Desktop}
              alt="Desktop"
              className=" md:w-[25rem] lg:w-[30rem] absolute top-20 lg:left-[3rem]"
            />
            <img
              src={Boy}
              alt="Boy"
              className=" md:w-[9rem] lg:w-[10rem] absolute top-25 right-0 lg:right-[3rem]"
            />
            <img
              src={Girl}
              alt="Girl"
              className=" md:w-[9rem] lg:w-[10rem] absolute top-65 left-13 lg:top-[20rem] lg:left-[8rem]"
            />
          </div>
        </div>

        <div className="relative pl-5 mt-[8rem] bg-gray-600 text-white space-y-6">
          <Typography
            variant="h2"
            className="font-semibold  md:text-2xl lg:text-6xl"
          >
            Best solutions for your <br /> demanding collection
          </Typography>
          <Typography variant="h5" className="text-sm md:text-base lg:text-lg py-3">
            Odio vulputate cras vel lacinia turpis volutpat adipiscing.
            Sollicitudin at velit, blandit tempus nunc in.
          </Typography>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Check />
              <Typography variant="h6">
                Interdum volutpat turpis malesuada ac turpis.
              </Typography>
            </div>
            <div className="flex items-center gap-3">
              <Check />
              <Typography variant="h6">
                Tortor ipsum pretium quis nunc.
              </Typography>
            </div>
            <div className="flex items-center gap-3">
              <Check />
              <Typography variant="h6">Vitae odio a id purus in.</Typography>
            </div>
          </div>

          <button className="text-white text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] border-2 border-white p-2 px-5 rounded-lg hover:bg-gray-200">
            Explore Xinder
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSolutions;
