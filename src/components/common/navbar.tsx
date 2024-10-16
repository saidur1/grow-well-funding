"use client";
// Packages
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

// Components
import ApplyButton from "@/components/ui/applyButton";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/data";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (scrollPosition > currentScrollPos) {
        // Scrolling up
        setShowNavbar(true);
      } else {
        // Scrolling down
        setShowNavbar(false);
      }

      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  const modalControl = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <>
      <section
        className={cn(
          "h-[80px] bg-white border-b  px-4 md:px-8 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out",
          showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
        )}
      >
        <div className="max-w-[1000px]  mx-auto">
          <div className="flex items-center w-full justify-between h-full">
            <div className="flex-initial w-[200px]">
              <Link href="/">
                <Image src="/logo.webp" width={80} height={80} alt="logo" />
              </Link>
            </div>
            <div className="flex-1 h-full md:flex justify-around items-center hidden">
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
              <Sheet open={open} onOpenChange={() => modalControl()}>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="p-1">
                    <Menu className="text-primary-main" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="top" className="bg-white pt-[60px]">
                  <MobileNavbar modalControl={modalControl} />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;

const MobileNavbar = ({ modalControl }: { modalControl: () => void }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center gap-y-8">
      <Link
        href="/"
        onClick={modalControl}
        className={cn(
          "text-primary-main hover:text-primary-main/80 transition duration-200"
        )}
      >
        Home
      </Link>
      <Link
        href="/about"
        onClick={modalControl}
        className={cn(
          "text-primary-main hover:text-primary-main/80 transition duration-200"
        )}
      >
        About
      </Link>
      <Popover open={open} onOpenChange={() => setOpen(!open)}>
        <PopoverTrigger>
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              "text-primary-main hover:text-primary-main/80 transition duration-200"
            )}
          >
            Services
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="space-y-2 flex flex-col">
            <Link
              onClick={() => {
                setOpen(!open);
                modalControl();
              }}
              href="/equipment-financing"
              className="text-primary-main hover:text-primary-main/80 transition duration-200"
            >
              Equipment Financing
            </Link>
            <Link
              onClick={() => {
                setOpen(!open);
                modalControl();
              }}
              href="/business-line-of-credit"
              className="text-primary-main hover:text-primary-main/80 transition duration-200"
            >
              Business Line of Credit
            </Link>
          </div>
        </PopoverContent>
      </Popover>
      <Link
        href="/contact"
        onClick={modalControl}
        className={cn(
          "text-primary-main hover:text-primary-main/80 transition duration-200"
        )}
      >
        Contact
      </Link>
      <ApplyButton />
    </div>
  );
};
