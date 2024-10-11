import { navLinks } from "@/data";
import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-[50px] bg-primary-main">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sectionContainer">
        <div className="space-y-3">
          <h1 className="text-white text-[20px] font-nunito font-semibold">
            About Us
          </h1>
          <div>
            <p className="text-[14px] text-white">
              Here at Growwell, we pride ourselves on providing service that is
              efficient, transparent, and comprehensive. Our team of experts
              works for you to rapidly approve your application and connect you
              to the financial boost you need for your next chapter. Work with
              us today for the opportunity to make your business simpler, more
              efficient, and ultimately more profitable
            </p>
          </div>
        </div>
        <div className="mx-auto space-y-3">
          <h1 className="text-white text-[20px] font-nunito font-semibold">
            Quick Links
          </h1>
          <div className="flex flex-col gap-y-3">
            {navLinks.map(({ href, id, name }) => (
              <Link
                key={id}
                className="text-white/60 hover:text-white transition duration-300"
                href={href}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mx-auto space-y-3">
          <h1 className="text-white text-[20px] font-nunito font-semibold">
            Contact Info
          </h1>
          <div className="text-white/60 space-y-2">
            <h4>Email: info@growwellfunding.com</h4>
            <h4>Phone: 845-307-4189</h4>
            <h4>Fax: 800-816-5191</h4>
          </div>
        </div>
        <div className="mx-auto space-y-3">
          <h1 className="text-white text-[20px] font-nunito font-semibold">
            Follow Us
          </h1>
          <div className=" flex items-center gap-x-3">
            <a href="#">
              <Instagram className="text-white/60 hover:text-white transition-colors duration-300" />
            </a>
            <a href="#">
              <Linkedin className="text-white/60 hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>

      <p className="text-white/80 text-center mt-[50px]">
        © 2023 Growwell Funding All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
