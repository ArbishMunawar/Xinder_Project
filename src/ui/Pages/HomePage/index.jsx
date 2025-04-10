import React from "react";
import Typography from "../../Common/Typography/index";
import HomeImage from "../../../assets/images/Col.png";
import Search from "../../../assets/icons/Search";
import SmartFinder from "../../../assets/icons/SmartFinder";
import Zoomer from "../../../assets/icons/Zoomer";
import Shells from "../../../assets/icons/Shells";
import Waves from "../../../assets/icons/waves";
import ArtVenu from "../../../assets/icons/ArtVenu";
import Button from "../../Common/Button";
import FeaturedArt from "../../Section/FeaturedArt";
import LatestMasterpieces from "../../Section/LatestMasterpieces";
import ExpandingServices from "../../Section/ExpandingServices";
import BestSolutions from "../../Section/BestSolutions";
import VideoSection from "../../Section/VideoSection";
import AddMasterpieceSection from "../../Section/AddMasterpieceSection";
import ArtEvents from "../../Section/ArtEvents";
import BeIncredible from "../../Section/BeIncredible";

const HomePage = () => {
  return (
    <>
      <section className="bg-rose-900 w-full  text-white md:grid md:grid-cols-2 ">
        {/* left  */}
        <div className="pl-5 lg:max-w-[1440px] lg:mx-auto lg:bg-rose-900 md:pt-[20%] lg:py-[20%] xl:pb-[15%] ">
          <div className="flex flex-col ">
            <Typography className="text-5xl font-bold  md:text-4xl lg:text-6xl xl:text-7xl">
              Search the work of{" "}
              <span className="mt-3 block">the best artists</span>
            </Typography>
          </div>

          <div className="flex gap-2 pt-9  ">
            <div className="flex items-center  border-2 border-white rounded px-4 py-2 bg-white focus-within:border-rose-900 focus-within:ring-rose-900 md:w-[20rem] lg:w-[26rem] xl:w-[33rem]">
              <Search />
              <input
                type="search"
                placeholder="Search for artists, work name, or category"
                className="outline-none text-black w-[10rem] md:w-[20rem] placeholder-grey-600 bg-transparent"
              />
            </div>
            <Button>Search</Button>
          </div>
          <div className="pt-3 flex gap-2 text-nowrap overflow-auto overflow-y-hidden hide-scrollbar">
            <Typography
              variant="span"
              className="border border-white rounded p-1 px-2"
            >
              Oil Painting
            </Typography>
            <Typography
              variant="span"
              className="border border-white rounded p-1 px-2"
            >
              Abstract Art
            </Typography>
            <Typography
              variant="span"
              className="border border-white rounded p-1 px-2"
            >
              Sculpture
            </Typography>
            <Typography
              variant="span"
              className="border border-white rounded p-1 px-2"
            >
              Art Deco
            </Typography>
            <Typography
              variant="span"
              className="border border-white rounded p-1 px-2"
            >
              Pop Art
            </Typography>
          </div>
        </div>

        {/* right  */}
        <div className="pt-6 pr-3 lg:absolute lg:right-0 lg:top-29 lg:pt-0 lg:w-1/2  xl:absolute xl:top-25 xl:right-0">
          <img src={HomeImage} alt="home image" className="" />
        </div>
      </section>

      {/* bottom  */}
      <div className="bg-gray-100">
        <div className="bg-gray-100 md:flex md:justify-evenly md:items-center lg:max-w-[1440px] lg:mx-auto lg:bg-gray-100 lg:flex lg:justify-evenly lg:items-center">
          <div className="flex justify-center items-center gap-5 py-5 pt-10 md:py-9 lg:gap-10 ">
            <div className="flex justify-center items-center gap-2">
              <SmartFinder />
              <Typography className="text-[24px] text-gray-400 font-bold">
                Smart Finder
              </Typography>
            </div>
            <div className="flex justify-center items-center gap-2 lg:pl-9">
              <Zoomer />
              <Typography className="text-[24px] text-gray-400 font-bold">
                Zoomer
              </Typography>
            </div>
          </div>

          <div className="flex justify-center items-center gap-14 ">
            <div className="flex justify-center items-center gap-2 lg:pr-9">
              <Shells />
              <Typography className="text-[24px] text-gray-400 font-bold">
                Shells
              </Typography>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Waves />
              <Typography className="text-[24px] text-gray-400 font-bold">
                Waves
              </Typography>
            </div>
          </div>
          <div className="flex justify-center items-center py-7 pb-10 gap-3 md:py-0 md:pt-0 lg:pr-9">
            <ArtVenu />
            <Typography className="text-[24px] text-gray-400 font-bold">
              Art Venu
            </Typography>
          </div>
        </div>
      </div>

      <FeaturedArt/>
      <LatestMasterpieces/>
      <ExpandingServices/>
      <BestSolutions/>
      <VideoSection/>
      <BeIncredible/>
      <ArtEvents/>
      <AddMasterpieceSection/>
    </>
  );
};
export default HomePage;
