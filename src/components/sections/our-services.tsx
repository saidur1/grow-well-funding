import { servicesLists } from "@/data";
import Image from "next/image";
import ApplyButton from "../ui/applyButton";
import SectionTitle from "../ui/section-title";

const Services = () => {
  return (
    <div className="sectionContainer">
      <SectionTitle
        title="Our Services"
        description="With a network of capital to tap into as well as rapid forward progress for your loan, applying for the money you need is as simple as applying. Here are the top Two money-lending services you can expect from Growell Funding"
        center
        titleClasses="font-bold font-nunito"
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {servicesLists.map(({ description, icon, id, title }) => (
          <div
            key={id}
            className="flex flex-col space-y-2 items-center max-w-[320px] mx-auto"
          >
            <Image src={icon} width={60} height={60} alt="icon" />
            <h1 className="text-[#345259] text-[20px] font-semibold font-nunito text-center">
              {title}
            </h1>
            <p className="text-center font-nunito font-medium">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-[50px] lg:mt-[100px] w-full flex justify-center">
        <ApplyButton />
      </div>
    </div>
  );
};

export default Services;
