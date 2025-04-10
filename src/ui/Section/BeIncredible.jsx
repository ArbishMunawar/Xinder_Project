import React, { useState } from "react";
import Decoration from "../../assets/images/Decoration.png";
import Splash from "../../assets/images/Splash.png";
import Face from "../../assets/images/Face.png";
import Flower from "../../assets/images/Flower.png";
import MasterpieceCard from "../Common/MasterpieceCard/index";
import UserThumb1 from "../../assets/images/UserThumb1.png";
import UserThumb2 from "../../assets/images/UserThumb2.png";
import UserThumb3 from "../../assets/images/UserThumb3.png";
import UserThumb4 from "../../assets/images/UserThumb4.png";
import Typography from "../Common/Typography/index";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardData = [
  { image: Flower, userThumb: UserThumb1, title: "Flower Decoration" },
  { image: Decoration, userThumb: UserThumb2, title: "Classic Vase" },
  { image: Splash, userThumb: UserThumb3, title: "Abstract Splash" },
  { image: Face, userThumb: UserThumb4, title: "Modern Face" },
];

const BeIncredible = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < cardData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="bg-gray-700 p-5">
      <div className="md:flex md:justify-between md:items-center gap-10 lg:max-w-[1400px] lg:mx-auto ">

        <div className="mb-6 md:mb-0 md:w-[40%] lg:w-[700px]">
          <Typography variant="h1" className="text-white font-semibold md:text-2xl lg:text-5xl lg:font-bold">
            Be Incredible
          </Typography>
          <Typography
            variant="p"
            className="text-white text-sm font-extralight py-5"
          >
            Nec ultricies eget placerat ultricies eleifend dignissim aliquet
            sapien. Senectus vestibulum, eget erat at et congue cursus pretium.
          </Typography>
          <button className="text-white border-2 border-white px-6 py-2 rounded-lg hover:bg-white hover:text-gray-800 transition">
            Explore Xinder
          </button>
        </div>

        <div className="relative w-full ">
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 p-2 rounded-full shadow-md"
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="overflow-x-auto hide-scrollbar md:overflow-hidden md:max-w-[550px] lg:max-w-[1000px] mx-auto">
            <div
              className="flex gap-[3.5rem] duration-500 "
            >
              {cardData.map((item, index) => {
                const isActive = index === currentIndex;
                return (
                  <div
                    key={index}
                    className={`transition-all duration-300 flex-shrink-0  w-[200px] md:w-[200px] 
                     ${ isActive ? "md:w-[300px] md:blur-0 ": "md:w-[50px] md:blur-sm "}`}
                  >
                    <MasterpieceCard
                      image={item.image}
                      userThumb={item.userThumb}
                      title={item.title}
                      CL="h-[4rem]"
                      titleClass="h-[2rem] w-[2rem]"
                      className="border-2 border-white rounded-2xl"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 p-2 rounded-full shadow-md hover:scale-110 transition"
            disabled={currentIndex === cardData.length - 1}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeIncredible;
