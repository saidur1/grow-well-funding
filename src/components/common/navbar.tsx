import { navLinks } from "@/data";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ApplyButton from "../ui/applyButton";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Navbar = () => {
  return (
    <section className="h-[80px]  border-b">
      <div className="flex items-center w-full md:max-w-[1021px] justify-between h-full sectionContainer">
        <Link href="/">
          <Image src="/logo.webp" width={80} height={80} alt="logo" />
        </Link>
        <div className="flex-1 h-full md:flex justify-end items-center gap-x-28 hidden">
          {navLinks.map(({ id, name, href }) => (
            <Link
              key={id}
              href={href}
              className="text-primary-main hover:text-primary-main/80 transition duration-200"
            >
              {name}
            </Link>
          ))}
          <Button className="h-[40px] rounded-none bg-primary-main border-[1px] border-primary-main hover:bg-transparent hover:text-primary-main transition duration-300">
            Apply Now
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-1">
                <Menu className="text-primary-main" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-white pt-[60px]">
              <div className="flex flex-col items-center gap-y-8">
                {navLinks.map(({ id, name, href }) => (
                  <Link
                    href={href}
                    key={id}
                    className="text-primary-main hover:text-primary-main/80 transition duration-200"
                  >
                    {name}
                  </Link>
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
