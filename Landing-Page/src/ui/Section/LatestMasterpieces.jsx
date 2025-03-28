// import React from "react";
// import TopSection from "../Common/TopSection";
// import MasterpieceCard from "../Common/MasterpieceCard";
// import Decoration from "../../assets/images/Decoration.png";
// import Splash from "../../assets/images/Splash.png";
// import Face from "../../assets/images/Face.png";
// import Flower from "../../assets/images/Flower.png";
// import UserThumb1 from "../../assets/images/UserThumb1.png";
// import UserThumb2 from "../../assets/images/UserThumb2.png";
// import UserThumb3 from "../../assets/images/UserThumb3.png";
// import UserThumb4 from "../../assets/images/UserThumb4.png";
// import LeftArrow from '../../assets/icons/LeftArrow'
// import RightArrow from '../../assets/icons/RightArrow'

// const LatestMasterpieces = () => {
//   return (
//     <>
//       <section className="w-full bg-gray-100 ">
//         <div className="lg:bg-gray-100  ">
//         <TopSection title="Latest Masterpieces" subtitle="Discover More Masterpieces" />
// {/* <LeftArrow/> */}
//         <div className="flex gap-5 overflow-x-auto scroll-smooth hide-scrollbar px-5 flex-nowrap lg:pl-[6rem] ">
//           <MasterpieceCard image={Flower} userThumb={UserThumb1} title="Flower Decoration" author="by Melvina Spring" />
//           <MasterpieceCard image={Decoration} userThumb={UserThumb2} title="Decoration" author="by Jane Doe" />
//           <MasterpieceCard image={Splash} userThumb={UserThumb3} title="Splash Art" author="by John Smith" />
//           <MasterpieceCard image={Face} userThumb={UserThumb4} title="Face Abstract" author="by Emily Carter" />
//           <MasterpieceCard image={Flower} userThumb={UserThumb4} title="Face Abstract" author="by Emily Carter" />
//         </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default LatestMasterpieces;

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
    <section className="relative w-full bg-gray-100 md:pl-5 lg:pl-[6rem]">
      <TopSection
        title="Latest Masterpieces"
        subtitle="Discover More Masterpieces"
      />
      <button
        className="absolute left-2 md:top-[60%]  bg-white p-2 rounded-full shadow-md hover:bg-gray-200 hidden md:block lg:ml-20"
        onClick={scrollLeft}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="absolute right-2  md:top-[60%]  bg-white p-2 rounded-full shadow-md hover:bg-gray-200 hidden md:block lg:mr-20"
        onClick={scrollRight}
      >
        <ChevronRight size={24} />
      </button>

      {/* Scrollable Cards Container */}
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
