import Button from "./Button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const options = [
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Company",
    url: "/company",
  },
  {
    label: "Press",
    url: "/press",
  },
  {
    label: "Contact",
    url: "/contact",
  },
  {
    label: "Product",
    url: "/product",
  },
  {
    label: "Careers",
    url: "/careers",
  },
  {
    label: "Blog",
    url: "/blog",
  },
  {
    label: "Press",
    url: "/press",
  },
  {
    label: "Newsletter",
    url: "/newsletter",
  },
  {
    label: "Story",
    url: "/story",
  },
  {
    label: "More",
    url: "/more",
  },
  {
    label: "More",
    url: "/more",
  },
];

export default function Footer() {
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <div className="bg-black md:py-20 md:pb-28 md:px-[135px] px-8 py-10 bg-gradient-to-b from-[#090A18] from-80% to-[#313B827D]">
      <div className="flex flex-col md:gap-16 gap-8 ">
        <div className="flex justify-between flex-col md:flex-row gap-6 md:gap-0">
          <h1 className="font-medium text-white text-[26px] leading-[52px]">
            Get your AI apps built with blazing speed.
          </h1>
          <Button fill={false} size="lg">
            <span>Get Started</span>
            <ArrowRightIcon className="font-bolder" />
          </Button>
        </div>

        <hr className="border opacity-25"></hr>

        <div className="flex justify-between flex-col md:flex-row gap-10 md:gap-0">
          <div className="flex flex-col gap-8 max-w-96">
            <h1 className="font-medium text-2xl leading-6 text-[#FFFFFFB2]">
              BuilderKit.ai
            </h1>
            <span className="text-[#B0B2B8] md:text-lg">
              Highly modular NextJS AI Boilerplate that allows you to ship any
              AI Apps within days.
            </span>
            <p className="font-medium text-white">All rights reserved</p>
          </div>

          <div className="grid grid-cols-3 md:gap-x-[140px] gap-y-4 gap-x-10 text-[#B0B2B8] text-sm font-medium ">
            {options.map((option, index) => {
              return (
                <Link
                  href={option.url}
                  className="text-start hover:underline"
                  key={index}
                >
                  {option.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
