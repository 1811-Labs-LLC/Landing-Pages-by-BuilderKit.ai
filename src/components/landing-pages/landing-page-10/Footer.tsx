// This component is used to display the website's footer section.
// It typically contains links to important pages, contact information, and social media icons.
// This component is crucial for navigation and offers users a way to connect with the company on different platforms.

import { CiTwitter } from "react-icons/ci";
import { FaDribbble, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import ButtonCta from "./ButtonCta";
import { cn } from "@/lib/utils";

const footerItems = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/#pricing" },
  { name: "FAQ", href: "/#faq" },
  { name: "License", href: "/" },
  { name: "Terms", href: "/" },
  { name: "Contact", href: "mailto:vatsal1811@gmail.com" },
];

const socialMediaIcons = [
  { icon: <CiTwitter className="size-5 text-white" />, name: "Twitter" },
  { icon: <FaInstagram className="size-5 text-white" />, name: "Instagram" },
  { icon: <FaDribbble className="size-5 text-white" />, name: "Dribbble" },
  { icon: <MdOutlineEmail className="size-5 text-white" />, name: "Email" },
];

const Footer = () => {
  return (
    <div className="space-y-[154px] mt-[200px]">
      <div className="space-y-10 mx-auto px-4">
        <p className="header-gradient text-5xl md:text-[56px] text-center font-medium leading-[64px]">
          Unleash the power of AI with GenAI
        </p>
        <p className="text-[#ABABB0] text-lg md:text-[22px] font-normal leading-[30px] md:leading-[34px] tracking-[0.2px] text-center max-w-3xl mx-auto">
          Highly modular NextJS AI Boilerplate that allows you to ship any AI
          Apps within days.
        </p>
        <div className="w-fit mt-8 mx-auto">
          <ButtonCta className="px-10 py-3.5 h-10" />
        </div>
        <div className="flex gap-10 justify-center">
          {socialMediaIcons.map((socialMedia, index) => (
            <div
              key={index}
              className="flex size-10 md:size-12 justify-center items-center border rounded-full social-background cursor-pointer"
            >
              {socialMedia.icon}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 space-y-12 px-4 py-16">
        <ul className="flex flex-col md:flex-row gap-5 justify-center">
          {footerItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={cn(
                item.name === "Home" ? "text-white" : "text-[#A5ABB6]",
                "text-base font-normal",
              )}
            >
              {item.name}
            </Link>
          ))}
        </ul>

        <div className="text-[#676D79] md:text-center">
          Copyright © 2024. A{" "}
          <Link
            href="https://1811labs.com"
            target="_blank"
            rel="noreferrer"
            className="hover:underline mr-2"
          >
            1811 Labs
          </Link>
          product.
          <br className="block md:hidden" /> All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
