import React from "react";
import Typography from "../Typography";

const MasterpieceCard = ({ image, userThumb, title, author,className,CL,titleClass }) => {
  return (
    <div className={`w-auto min-w-[240px] shrink-0 shadow-lg ${className}`}>
      <img src={image} alt={title} className="object-cover w-full rounded-t-2xl" />
      <div className={`bg-white rounded-b-2xl p-5 flex gap-5 items-center ${CL}`}>
        <img
          src={userThumb}
          alt="User"
          className={`w-16 h-16 rounded-full object-cover ${titleClass}`}
        />
        <div className="overflow-hidden ">
          <Typography variant="h5" className="font-medium whitespace-nowrap">{title}</Typography>
          <Typography variant="p" className="text-gray-600">{author}</Typography>
        </div>
      </div>
    </div>
  );
};

export default MasterpieceCard;
