import { CircleChevronDown } from "lucide-react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div
      className=" relative h-[80vh] bg-no-repeat bg-cover bg-fixed bg-gray-100"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/5845710/pexels-photo-5845710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="absolute top-1/2  -translate-x-1/2  -translate-y-1/2  left-1/2">
        <h4 className="text-[22px] text-white font-bold text-center ">
          Welcome to Growwell Funding
        </h4>
        <h1 className="text-white text-center text-[46px] md:text-[66px] max-w-[674px] ">
          Get Funding & Expand today
        </h1>
        <div className="flex items-center justify-center gap-x-7 mt-[20px]">
          <Button className="bg-primary-main text-white font-medium h-[40px] border-[1px] border-primary-main hover:bg-white hover:text-primary-main transition-all duration-300 rounded-none">
            Apply Now
          </Button>
          <Button className="bg-white border-[1px] border-primary-main text-primary-main font-medium rounded-none h-[40px] hover:bg-primary-main hover:text-white transition-all duration-300">
            Contact Us
          </Button>
        </div>
      </div>
      <div className="absolute bottom-12  -translate-x-1/2  -translate-y-1/2  left-1/2 text-white">
        <CircleChevronDown className="h-10 w-10" />
      </div>
    </div>
  );
};

export default Hero;
