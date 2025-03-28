// import React from "react";

// import Typography from "../Typography";
// // import Eye from '../../../assets/images/Eye.png'
// const MasterpieceCard = ({image,userThumb,title,author}) => {
//   return (
//     <section className=" pb-[10rem] pl-5">
//       <div>
//         <img src={image} alt="Flower" className="object-cover rounded-t-lg" />
//         <div className="bg-white rounded-b-lg p-5 flex gap-5 items-center">
//           <img
//             src={userThumb}
//             alt="UserThumb1"
//             className="w-16 h-16 rounded-full object-cover"
//           />
//           <div>
//           <Typography variant="h5" className="font-medium">{title}</Typography>
//           <Typography variant="p" className="text-gray-600">{author}</Typography>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MasterpieceCard;


import React from "react";
import Typography from "../Typography";

const MasterpieceCard = ({ image, userThumb, title, author }) => {
  return (
    <div className="w-auto min-w-[240px] shrink-0 shadow-lg shadow-gray-400"> {/* Prevent shrinking */}
      <img src={image} alt={title} className="object-cover rounded-t-lg w-full" />
      <div className="bg-white rounded-b-lg p-5 flex gap-5 items-center">
        <img
          src={userThumb}
          alt="User"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="overflow-hidden"> {/* Prevent text issues */}
          <Typography variant="h5" className="font-medium whitespace-nowrap">{title}</Typography>
          <Typography variant="p" className="text-gray-600">{author}</Typography>
        </div>
      </div>
    </div>
  );
};

export default MasterpieceCard;
