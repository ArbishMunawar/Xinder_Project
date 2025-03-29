import React from "react";
import TopSection from "../Common/TopSection";
import MasterpieceCard from "../Common/MasterpieceCard";
import Decoration from "../../assets/images/Decoration.png";
import Splash from "../../assets/images/Splash.png";
import Face from "../../assets/images/Face.png";
import Flower from "../../assets/images/Flower.png";
import UserThumb1 from "../../assets/images/UserThumb1.png";
import UserThumb2 from "../../assets/images/UserThumb2.png";
import UserThumb3 from "../../assets/images/UserThumb3.png";
import UserThumb4 from "../../assets/images/UserThumb4.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const scrollLeft = () => {
  const container = document.getElementById("scroll-container");
  if (container) {
    container.scrollLeft -= 300;
  }
};

const scrollRight = () => {
  const container = document.getElementById("scroll-container");
  if (container) {
    container.scrollLeft += 300;
  }
};

const LatestMasterpieces = () => {
  return (
    <section className="relative w-full bg-gray-100  xl:pl-[6rem] pb-10 lg:pb-16">
      <TopSection
        title="Latest Masterpieces"
        subtitle="Discover More Masterpieces"
      />
      <button
        className="absolute left-2 md:top-[50%]  bg-white p-2 rounded-full shadow-md hover:bg-gray-200 hidden md:block  xl:ml-20"
        onClick={scrollLeft}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="absolute right-2  md:top-[50%]  bg-white p-2 rounded-full shadow-md hover:bg-gray-200 hidden md:block xl:mr-20"
        onClick={scrollRight}
      >
        <ChevronRight size={24} />
      </button>

      <div
        id="scroll-container"
        className="flex gap-5 overflow-x-auto hide-scrollbar px-5"
      >
        <MasterpieceCard
          image={Flower}
          userThumb={UserThumb1}
          title="Flower Decoration"
          author="by Melvina Spring"
        />
        <MasterpieceCard
          image={Decoration}
          userThumb={UserThumb2}
          title="Classic Vase"
          author="by John Doe"
        />
        <MasterpieceCard
          image={Splash}
          userThumb={UserThumb3}
          title="Abstract Splash"
          author="by Lisa Art"
        />
        <MasterpieceCard
          image={Face}
          userThumb={UserThumb4}
          title="Modern Face"
          author="by Sarah Sketch"
        />

        <MasterpieceCard
          image={Flower}
          userThumb={UserThumb1}
          title="Flower Decoration"
          author="by Melvina Spring"
        />
        <MasterpieceCard
          image={Decoration}
          userThumb={UserThumb2}
          title="Classic Vase"
          author="by John Doe"
        />
        <MasterpieceCard
          image={Splash}
          userThumb={UserThumb3}
          title="Abstract Splash"
          author="by Lisa Art"
        />
         <MasterpieceCard
          image={Face}
          userThumb={UserThumb4}
          title="Modern Face"
          author="by Sarah Sketch"
        />
      </div>
    </section>
  );
};

export default LatestMasterpieces;
