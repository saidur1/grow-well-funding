"use client";
// Packages
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Components
import ApplyButton from "@/components/ui/applyButton";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/data";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <section className="h-[80px]  bg-white  border-b max-w-[1000px] mx-auto px-4 md:px-8">
      <div className="flex items-center w-full justify-between h-full ">
        <div className="flex-initial w-[200px]">
          <Link href="/">
            <Image src="/logo.webp" width={80} height={80} alt="logo" />
          </Link>
        </div>
        <div className="flex-1 h-full   md:flex justify-around items-center hidden">
          {navLinks.map(({ id, name, href, subLinks }) => (
            <HoverCard key={id} open={href !== "" ? false : undefined}>
              <HoverCardTrigger>
                <Link
                  href={href}
                  className="text-primary-main hover:text-primary-main/80 transition duration-200"
                >
                  {name}
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="space-y-2 flex flex-col">
                {subLinks?.map(({ href, id, name }) => (
                  <Link
                    key={id}
                    href={href}
                    className="text-primary-main hover:text-primary-main/80 transition duration-200"
                  >
                    {name}
                  </Link>
                ))}
              </HoverCardContent>
            </HoverCard>
          ))}
          <a href="/#apply">
            <Button className="h-[40px] rounded-none bg-primary-main border-[1px] border-primary-main hover:bg-transparent hover:text-primary-main transition duration-300">
              Apply Now
            </Button>
          </a>
        </div>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-1">
                <Menu className="text-primary-main" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-white pt-[60px]">
              <div className="flex flex-col items-center gap-y-8">
                {navLinks.map(({ id, name, href, subLinks }) => (
                  <HoverCard key={id} open={href !== "" ? false : undefined}>
                    <HoverCardTrigger>
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "text-primary-main hover:text-primary-main/80 transition duration-200",
                          href === "" && "select-none"
                        )}
                      >
                        {name}
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      {subLinks?.map(({ href, id, name }) => (
                        <Link
                          key={id}
                          href={href}
                          onClick={() => setOpen(false)}
                          className="text-primary-main hover:text-primary-main/80 transition duration-200"
                        >
                          {name}
                        </Link>
                      ))}
                    </HoverCardContent>
                  </HoverCard>
                ))}
                <ApplyButton />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
