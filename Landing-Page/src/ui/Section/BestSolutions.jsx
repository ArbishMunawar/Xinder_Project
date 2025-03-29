// import React from "react";
// import ColorFace from "../../assets/images/ColorFace.png";
// import Desktop from "../../assets/images/Desktop.png";
// import Boy from "../../assets/images/Boy.png";
// import Girl from "../../assets/images/Girl.png";
// import Typography from "../Common/Typography/index.jsx";
// import { Check } from "lucide-react";
// const BestSolutions = () => {
//   return (
//     <section className="bg-gray-600 min-h-svh py-[5rem]">
//       <div className="md:grid md:grid-cols-2 order-2  md:col-start-2">
//         <div className="relative">
//           <img src={ColorFace} alt="Face" className="pl-5 pt-9 w-[15rem]" />
//           <img
//             src={Desktop}
//             alt="Desktop"
//             className="w-[21rem] absolute top-20 right-8 "
//           />
//           <img
//             src={Boy}
//             alt="Boy"
//             className="w-[7rem] absolute top-25 right-4 "
//           />
//           <img
//             src={Girl}
//             alt="Girl"
//             className="w-[7rem] absolute top-65 left-13"
//           />
//         </div>
//         <div className="relative pl-5 bg-gray-600 text-white ">
//           <Typography variant="h2" className="absolute font-semibold top-[10rem] py-5">
//             Best solutions for your <br /> demanding collection
//           </Typography>
//           <Typography variant="h5" className="absolute  top-[15rem] py-5 text-wrap">Odio vulputate cras vel lacinia turpis volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in.</Typography>

//           <div className="absolute  top-[22rem] py-5 text-wrap flex gap-3">
//             <Check />
//             <Typography variant="h6" className="text-white">Interdum volutpat turpis malesuada ac turpis.</Typography>
//           </div>

//           <div className="absolute  top-[24rem] py-5 text-wrap flex gap-3">
//             <Check />
//             <Typography variant="h6" className="text-white">Tortor ipsum pretium quis nunc.</Typography>
//           </div>

//           <div className="absolute  top-[26rem] py-5 text-wrap flex gap-3">
//             <Check />
//             <Typography variant="h6" className="text-white">Vitae odio a id purus in.</Typography>
//           </div>
//           <button className="absolute top-[31rem] text-white text-[1.5rem] border-2 border-white p-2 px-5 rounded-lg hover:bg-gray-200 ">Explore Xinder</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BestSolutions;


import React from "react";
import ColorFace from "../../assets/images/ColorFace.png";
import Desktop from "../../assets/images/Desktop.png";
import Boy from "../../assets/images/Boy.png";
import Girl from "../../assets/images/Girl.png";
import Typography from "../Common/Typography/index.jsx";
import { Check } from "lucide-react";

const BestSolutions = () => {
  return (
    <section className="bg-gray-600 min-h-svh py-[5rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Image Section (Right on md Screens) */}
        <div className="relative md:order-2">
          <img src={ColorFace} alt="Face" className="pl-5 pt-9 w-[15rem]" />
          <img src={Desktop} alt="Desktop" className="w-[21rem] absolute top-20 right-8" />
          <img src={Boy} alt="Boy" className="w-[7rem] absolute top-25 right-4" />
          <img src={Girl} alt="Girl" className="w-[7rem] absolute top-65 left-13" />
        </div>

        {/* Text Section (Left on md Screens) */}
        <div className="relative pl-5 bg-gray-600 text-white md:order-1 ">
          <Typography variant="h2" className="absolute font-semibold top-[10rem] py-5 md:top-0">
            Best solutions for your <br /> demanding collection
          </Typography>
          <Typography variant="h5" className="absolute top-[15rem] py-5 text-wrap">
            Odio vulputate cras vel lacinia turpis volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in.
          </Typography>

          <div className="absolute top-[22rem] py-5 text-wrap flex gap-3">
            <Check />
            <Typography variant="h6" className="text-white">Interdum volutpat turpis malesuada ac turpis.</Typography>
          </div>

          <div className="absolute top-[24rem] py-5 text-wrap flex gap-3">
            <Check />
            <Typography variant="h6" className="text-white">Tortor ipsum pretium quis nunc.</Typography>
          </div>

          <div className="absolute top-[26rem] py-5 text-wrap flex gap-3">
            <Check />
            <Typography variant="h6" className="text-white">Vitae odio a id purus in.</Typography>
          </div>

          <button className="absolute top-[31rem] text-white text-[1.5rem] border-2 border-white p-2 px-5 rounded-lg hover:bg-gray-200">
            Explore Xinder
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSolutions;
