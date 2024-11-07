import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import InfoCard from "@/components/ui/info-card";
import SectionTitle from "@/components/ui/section-title";
import { faqsForBusinessFinancing } from "@/data";

const Page = () => {
  return (
    <section className="min-h-screen pb-[100px] pt-[80px]">
      <div
        className=" relative h-[220px] bg-no-repeat bg-cover bg-fixed bg-gray-100"
        style={{
          backgroundImage:
            "url(https://utfs.io/f/0CpqaBXnsrLBE359wKhS2lMG9RtWfUEc4LAKZIy6NokaYnwX)",
          backgroundPosition: "bottom",
        }}
      >
        <div className="absolute top-1/2  -translate-x-1/2  -translate-y-1/2  left-1/2">
          <h1 className="text-white font-nunito font-bold text-[40px]">
            Equipment Financing
          </h1>
        </div>
      </div>

      <div>
        <SectionTitle
          title="Everything You Need to Know About Equipment Financing"
          containerClasses="mt-[50px]"
          titleClasses="max-w-[490px] font-nunito font-semibold text-[35px]"
          description="Expanding a burgeoning small business is an exciting stage that requires capital to move forward. Keeping your business current with the competition is vital for company survival, but it can be hard to get on your feet. Equipment financing loans can help small business move quickly through the logistical phase of development so they can start raking in revenue."
          descriptionClasses="max-w-[1000px]"
        />
        <div className="py-[100px]">
          <InfoCard
            side="right"
            title="How Equipment Financing Loans Work?"
            titleClasses="font-nunito font-semibold text-[35px] "
            description="Much like a traditional loan, small businesses who finance their vital machinery must make periodic payments composed of interest and principal over a fixed period of time. Should a loan applicant fail to repay their loan in full, the lender is subject to repossess business or even personal assets, depending upon the agreed-upon terms."
            para2="Equipment financing is distinct from equipment leasing, in which a business owner pays a rental fee for equipment over a predetermined term."
            imgSrc="https://utfs.io/f/O28eV6fH0F3pE2kikmdB7QeWmo3JK4Lrxh1ZbIYMXBN6Ea08"
          />
        </div>

        <div className="sectionContainer">
          <SectionTitle
            title="Equipment Financing FAQ"
            titleClasses="font-nunito font-semibold text-[35px] md:text-[45px]"
            description="Here are some frequently asked questions surrounding equipment financing."
            center
          />
          <Accordion type="single" collapsible>
            {faqsForBusinessFinancing.map(({ desc, id, ques }) => (
              <AccordionItem value={`item-${id}`} key={id}>
                <AccordionTrigger className="text-[18px] md:text-[20px] font-nunito font-medium hover:no-underline text-left">
                  {ques}
                </AccordionTrigger>
                <AccordionContent className="text-primary-gray">
                  {desc}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Page;
