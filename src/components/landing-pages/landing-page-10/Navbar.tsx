// This component is used to provide navigation links across the website.
// It is typically placed at the top of each page and includes links to major sections like Home, About, Services, and Contact.
// The component also handles responsive adjustments to ensure navigation is accessible on different device sizes.

import { cn } from "@/lib/utils";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiBars3 } from "react-icons/hi2";
import ButtonCta from "./ButtonCta";
import Image from "next/image";

const NavbarRoutes = [
  { label: "Features", url: "/#features" },
  { label: "Products", url: "/#products" },
  { label: "Testimonials", url: "/#testimonials" },
  { label: "FAQ", url: "/#faq" },
];

export default async function Navbar() {
  return (
    <div className="w-full text-white bg-[#031614]">
      <div
        className={cn(
          "max-w-6xl mx-auto flex justify-between items-center p-4"
        )}
      >
        <Link href="https://www.builderkit.ai">
          <div className="flex items-center gap-2 w-fit">
            <Image src="/lp10-logo.png" width={132} height={132} alt="logo" />
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-12">
          {NavbarRoutes.map((item, index) => (
            <li
              key={index}
              className="text-sm cursor-pointer font-medium leading-6"
            >
              <Link href={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <ButtonCta />
        </div>

        <Sheet>
          <SheetTrigger className="block md:hidden">
            <HiBars3 size={24} />
          </SheetTrigger>
          <SheetContent>
            <div className="space-y-6">
              <div className="flex flex-col gap-4">
                {NavbarRoutes.map((item, index) => (
                  <div key={index} className="text-sm font-medium py-2">
                    <SheetClose asChild>
                      <Link href={item.url}>{item.label}</Link>
                    </SheetClose>
                  </div>
                ))}
              </div>
              <ButtonCta className="w-full" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
