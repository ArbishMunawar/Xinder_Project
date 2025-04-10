import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import vid1 from "../../assets/Videos/vid1.mp4";
import vid2 from "../../assets/Videos/vid2.mp4";
import vid3 from "../../assets/Videos/vid3.mp4";
import Typography from "../Common/Typography/index";

const VideoSection = () => {
  const scroll = (direction) => {
    const scrollContainer = document.querySelector("#videoScrollContainer");
    if (scrollContainer) {
      const scrollAmount = scrollContainer.clientWidth;
      scrollContainer.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative p-5 py-[4rem] bg-gray-100 overflow-hidden">
      <div className="lg:max-w-[1440px] lg:mx-auto ">
        <div
          id="videoScrollContainer"
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-5 w-full md:w-screen lg:w-screen"
        >
          {[vid1, vid2, vid3].map((videoSrc, index) => (
            <div
              key={index}
              className="min-w-full  flex flex-col md:flex-row justify-center snap-start lg:gap-[7rem]"
            >
              <video controls className="rounded-xl w-full md:w-1/2 lg:w-2/5">
                <source src={videoSrc} type="video/mp4" />
              </video>

              <div className="flex flex-col mt-4 md:mt-0 md:w-1/2 md:px-11 lg:justify-center lg:pr-[12rem]">
                <Typography
                  variant="h4"
                  className="text-gray-600 pt-6 pb-3 lg:text-lg md:text-lg "
                >
                  Marie Poirot, Co-Founder
                  <span className="text-blue-500">{""} Art-Gal</span>
                </Typography>
                <Typography
                  variant="h5"
                  className="text-gray-900 text-xl pb-6 lg:pr-[5rem]"
                >
                  “Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu
                  mattis est velit in. Nibh in purus sit convallis phasellus ut.
                  Neque suspendisse a habitasse commodo.”
                </Typography>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("left")}
          className="absolute  top-[45%] lg:left-[4rem] bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 md:block hidden"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-[45%] lg:right-[4rem] bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 md:block hidden"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default VideoSection;
