import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export const CN =(...classes) => {
  return twMerge(clsx(classes));
};



// git add .
// git commit -m "Updated homepage, added images and icons"
//  git push origin master
