import React, { useState } from "react";
import Logo from "../../../assets/icons/Logo";
import MenuIcon from "../../../assets/icons/MenuIcon";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleButton = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="bg-rose-900 w-full z-[100] relative">
        <div className="h-auto max-w-[1440px] px-4 mx-auto py-5 flex justify-between items-center">
          <Logo />

          <div className="text-white hidden md:flex items-center gap-9 font-semibold">
            <a href="">Explore</a>
            <a href="">Solutions</a>
            <a href="">Articles</a>
            <a href="">Sign In</a>
            <button className="border border-white rounded px-5 py-2">
              Join Now
            </button>
          </div>

          <div className="lg:hidden md:hidden text-white">
            <button onClick={toggleButton}>
            {<MenuIcon />}
            </button>
          </div>
        </div>

        <div
          className={`transition-all duration-300 overflow-hidden ${
            open ? "max-h-[300px] py-5" : "max-h-0"
          } bg-rose-900 text-white flex flex-col items-center md:hidden relative z-[150] backdrop-blur-3xl bg-opacity-90`}
        >
          <ul className="flex flex-col gap-5 text-lg">
            <li>Explore</li>
            <li>Solutions</li>
            <li>Articles</li>
            <li>Sign In</li>
          </ul>
          <button className="border mt-3 border-white rounded px-5 py-2">
            Join Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
