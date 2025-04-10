import React from "react";
import Col2 from "../../assets/images/Col2.png";
import Typography from "../Common/Typography";

const AddMasterpieceSection = () => {
  return (
    <section className="bg-gray-900 flex flex-col items-center md:flex-row md:justify-between  lg:px-32 pt-[7rem] md:px-5">
      <div className="text-center md:w-1/2 md:text-left">
        <Typography
          variant="h1"
          className="text-white text-center md:text-left font-semibold pb-8 pt-14 lg:text-5xl lg:font-bold"
        >
          Add more masterpieces to your growing collection
        </Typography>

        <div className="text-center md:text-left pb-20">
          <button className="border-2 rounded-lg text-2xl font-normal border-white text-white p-3 px-6 mt-5">
            Join Now
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-end">
        <img src={Col2} alt="Col2" className="w-full md:w-auto md:max-w-md lg:max-w-[600px]" />
      </div>
    </section>
  );
};

export default AddMasterpieceSection;
