import Services from "@/components/sections/our-services";
import TextWithAction from "@/components/sections/text-with-action";

const About = () => {
  return (
    <>
      <div
        className=" relative h-[220px] bg-no-repeat bg-cover bg-fixed bg-gray-100 mt-[80px]"
        style={{
          backgroundImage:
            "url(https://utfs.io/f/0CpqaBXnsrLBE359wKhS2lMG9RtWfUEc4LAKZIy6NokaYnwX)",
          backgroundPosition: "bottom",
        }}
      >
        <div className="absolute top-1/2  -translate-x-1/2  -translate-y-1/2  left-1/2">
          <h1 className="text-white font-nunito font-bold text-[40px]">
            About Us
          </h1>
        </div>
      </div>
      <TextWithAction
        actionButton={false}
        titleClasses="font-bold font-nunito"
        center={false}
        title="About Growwell Funding"
        para1="Offering services to business owners nationwide, Growwell Funding is on-hand to help you unlock the potential of your business. We provide fast and simple loans, which have changed the game regarding business financing. "
        para2="Unlike traditional banks, we can provide funding in a flash, helping you move and focus on your business. Our experienced team has the know-how and the network to ensure capital can be provided quickly across various opportunities."
      />
      <div className="mt-[100px] mb-[50px]">
        <Services />
      </div>
    </>
  );
};

export default About;
