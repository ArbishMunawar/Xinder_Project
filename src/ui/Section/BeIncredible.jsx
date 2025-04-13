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
import { useRef } from "react";
import { CN } from "../../../utils";

const cardData = [
  { image: Flower, userThumb: UserThumb1, title: "Flower Decoration" },
  { image: Decoration, userThumb: UserThumb2, title: "Classic Vase" },
  { image: Splash, userThumb: UserThumb3, title: "Abstract Splash" },
  { image: Face, userThumb: UserThumb4, title: "Modern Face" },
  { image: Flower, userThumb: UserThumb1, title: "Flower Decoration" },
  { image: Splash, userThumb: UserThumb3, title: "Abstract Splash" },
  { image: Face, userThumb: UserThumb4, title: "Modern Face" },
];

const BeIncredible = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -250,
      behavior: "smooth",
    });

    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 250,
      behavior: "smooth",
    });

    if (currentIndex < cardData.length - 2) setCurrentIndex(currentIndex + 1);
  };

  return (
    <section className="bg-gray-700 p-5">
      <div className="md:flex md:justify-between md:items-center gap-10 lg:max-w-[1400px] lg:mx-auto ">
        <div className="mb-6 md:mb-0 md:w-[40%] lg:w-[700px]">
          <Typography
            variant="h1"
            className="text-white font-semibold md:text-2xl lg:text-5xl lg:font-bold"
          >
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
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 lg:left-40  bg-white text-gray-800 p-2 rounded-full shadow-md"
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="overflow-x-auto hide-scrollbar md:overflow-hidden md:max-w-[550px] lg:max-w-[1000px] mx-auto">
            <div
              ref={sliderRef}
              className={CN(
                " max-w-[800px] flex items-center justify-between gap-x-2 overflow-x-auto hide-scrollbar mx-auto",
                `w-[${cardData.length * 300}px]`
              )}
            >
              {cardData.map((item, i) => (
                <MasterpieceCard
                  key={i}
                  image={item.image}
                  userThumb={item.userThumb}
                  title={item.title}
                  CL="h-[4rem]"
                  titleClass="h-[2rem] w-[2rem]"
                  className={CN("border-2 border-white rounded-2xl", {
                    "md:[&&]:w-[10px] md:blur-[3px]": i !== currentIndex, 
                    "md:[&&]:w-[300px]": i === currentIndex,
                  })}
                />
              ))}
            </div>
            
          </div>

          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white lg:right-40  text-gray-800 p-2 rounded-full shadow-md hover:scale-110 transition"
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
