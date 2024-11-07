import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import InfoCard from "@/components/ui/info-card";
import SectionTitle from "@/components/ui/section-title";

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
            Business Line of Credit
          </h1>
        </div>
      </div>

      <div>
        <SectionTitle
          title="Everything You Need to Know About Equipment Financing"
          containerClasses="mt-[50px]"
          titleClasses="max-w-[490px] font-nunito font-semibold text-[35px] hidden text-primary-gray"
          description="Expanding a burgeoning small business is an exciting stage that requires capital to move forward. Keeping your business current with the competition is vital for company survival, but it can be hard to get on your feet. Equipment financing loans can help small business move quickly through the logistical phase of development so they can start raking in revenue."
          descriptionClasses="max-w-[1000px]"
          center
        />
        <div className="py-[100px] ">
          <InfoCard
            side="right"
            title="Business Lines of Credit vs Business Term Loans"
            titleClasses="font-nunito font-semibold text-[35px] "
            description="While a business term loan looks at a business’ credit profile to assess their eligibility for a loan at the time of application, a business line of credit evaluates the applicant’s current credit with projections down the road for future creditworthiness."
            para2="A term loan requires a fixed amount of capital while a business line of credit includes a lump sum upon approval. Business lines of credit also afford the applicant some flexibility for when they have access to funds, how the money is repaid, and how the capital is reused. Many lenders require the LOC balance come to zero during the credit line’s predetermined term."
            para3="Unlike a term loan, business line of credit users pay interest for the funds as they are used, as indicated in a periodic statement."
            imgSrc="https://utfs.io/f/O28eV6fH0F3paKbwvqohJNg5PstRH3mQ4FIwKpr87Mx6zdnB"
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
            <AccordionItem value={`item-1`}>
              <AccordionTrigger className="text-[18px] md:text-[20px] font-nunito font-medium hover:no-underline text-left">
                What Is a Business Line of Credit?
              </AccordionTrigger>
              <AccordionContent className="text-primary-gray">
                <div>
                  A business line of credit (or LOC) is a revolving loan. Lines
                  of credit allow businesses a fixed amount of capital, which
                  can be used as necessary for short term business expenses.
                  This can include expenditures such as:
                  <ul>
                    <li className="list-decimal">
                      - Funding marketing campaigns
                    </li>
                    <li className="list-item">
                      - Repairing business equipment
                    </li>
                    <li className="list-item">- Buying inventory</li>
                    <li className="list-item">
                      - Bridging fluctuations in seasonal revenue
                    </li>
                    <li className="list-item">- Company emergencies</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={`item-1`}>
              <AccordionTrigger className="text-[18px] md:text-[20px] font-nunito font-medium hover:no-underline text-left">
                How Does a Business Line of Credit Work?
              </AccordionTrigger>
              <AccordionContent className="text-primary-gray">
                <div>
                  Once a business line of credit has been opened, small
                  businesses have access to a lump sum that can be used however
                  it is needed, with terms that span as much as five years. The
                  payment (and the interest) required every week or month
                  depends on the amount the business uses. Annual fees are
                  common, and transaction fees may also be part of the
                  agreement.
                  <p>
                    LOCs under $100,000 operate much like a credit card, with a
                    business card connected to the account or company checks.
                    Some lenders also offer direct deposit into the business
                    account through an ACH deposit.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Page;
