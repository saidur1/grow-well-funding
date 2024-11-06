import Hero from "@/components/sections/hero";
import TextWithAction from "@/components/sections/text-with-action";
import InfoCard from "@/components/ui/info-card";
import SectionTitle from "@/components/ui/section-title";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("@/components/common/contact-form"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className="pb-[100px] pt-[80px]" id="home">
        <Hero />
        <div id="Start">
          <TextWithAction
            title="Exciting Business
Lending Opportunities Await"
            titleClasses="font-bold font-nunito"
            center
            actionButton
            para1="Taking that next step for your small business or real estate venture requires capital. For all those vital growth opportunities, Growwell Funding can lend years of experience in addition to the funds necessary to get you going."
            para2="Here at Growwell, we pride ourselves on providing service that is efficient, transparent, and comprehensive. Our team of experts works for you to rapidly approve your application and connect you to the financial boost you need for your next chapter. Work with us today for the opportunity to make your business simpler, more efficient, and ultimately more profitable."
          />
        </div>
        <div id="services" className="pt-[20px]">
          <SectionTitle
            title=" Growwell Funding Services"
            description="With a network of capital to tap into as well as rapid forward progress
        for your loan, applying for the money you need is as simple as applying.
        Here are the top three money-lending services you can expect from
        Growell Funding:"
          />
        </div>
        <div className="mt-[50px] space-y-10">
          <InfoCard
            side="left"
            title="Equipment Financing"
            description="These small-business loans can help growing companies cover the cost of machinery vital to their operation, ranging in scope from office furniture to medical equipment to restaurant equipment to agricultural tools. Financing your necessary business machinery not only takes the strain off of the initial purchase, but also helps businesses operating at their peak while allowing them to expand with increased volumes of customers."
            imgSrc="https://utfs.io/f/O28eV6fH0F3pE2kikmdB7QeWmo3JK4Lrxh1ZbIYMXBN6Ea08"
          />
          <InfoCard
            side="right"
            title="Business Lines of Credit"
            description="More similar in spirit to a company credit card than a small-business loan, a business line of credit provides flexibility in a company’s budget to meet unexpected expenses that may arise. This allows the small business owner to focus on growing their business without worrying about any bumps in the road towards expansion."
            imgSrc="https://utfs.io/f/O28eV6fH0F3paKbwvqohJNg5PstRH3mQ4FIwKpr87Mx6zdnB"
          />
        </div>

        <div className="mt-[100px] sectionContainer" id="apply">
          <div className="max-w-[520px] mx-auto">
            <h1 className="text-[30px] md:text-[45px] font-nunito font-semibold text-primary-main text-center ">
              APPLY NOW & GET APPROVED IN 24 HOURS
            </h1>
            <p className="max-w-[380px] mx-auto text-[17px] text-primary-gray text-center">
              Fill out our application now to get approved today!
            </p>
          </div>

          <div className=" w-full mt-[50px] md:mt-[100px] bg-gray-300 p-3 md:p-[20px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
