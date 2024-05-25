import React from "react";
import Image from "next/image";
import Dropbox from "@/assets/landing-page-10/dropbox.png";
import Paypal from "@/assets/landing-page-10/paypal.png";
import Google from "@/assets/landing-page-10/google.png";
import { cn } from "@/lib/utils";

const logos = [
  { src: Paypal, alt: "Paypal", height: 50, width: 150 },
  { src: Google, alt: "Google", height: 50, width: 130 },
  { src: Dropbox, alt: "Dropbox", height: 20, width: 160 },
  { src: Google, alt: "Google", height: 50, width: 130 },
];

const FeatureOn = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-[64px] h-[568px]">
      <div className="text-[#ABABB0] text-[32px] font-normal leading-10">
        Featured on:
      </div>
      <div className="flex justify-center flex-wrap w-full gap-10 lg:gap-0">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={cn(
              index !== logos.length - 1 && "lg:border-r",
              "border-[#132524] lg:px-14",
            )}
          >
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              height={logo.height}
              width={logo.width}
              //This logic is used to add a border to all the logos except the last one
              className="h-fit"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureOn;
