import ContactForm from "@/components/common/contact-form";
import { Instagram, LinkedinIcon } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen space-y-10 pb-10 pt-[80px]">
      <div
        className=" relative h-[400px] md:h-[320px] bg-no-repeat bg-cover bg-fixed bg-gray-100"
        style={{
          backgroundImage:
            "url(https://utfs.io/f/0CpqaBXnsrLBE359wKhS2lMG9RtWfUEc4LAKZIy6NokaYnwX)",
          backgroundPosition: "bottom",
        }}
      >
        <div className="absolute top-1/2  -translate-x-1/2  -translate-y-1/2  left-1/2 w-full">
          <h1 className="text-white font-nunito font-semibold text-[25px] md:text-[40px] text-center">
            Apply Now & Get Approved Instantly
          </h1>
          <div className="max-w-[1000px] mx-auto grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-4 text-white font-nunito  text-[19px] px-8">
            <div className="mr-auto md:mx-auto">
              <p>Email:</p>
              <p>info@growwellfunding.com</p>
            </div>
            <div className="mr-auto md:mx-auto">
              <p>Phone:</p>
              <p className="font-semibold">845-307-4189</p>
            </div>
            <div className="mr-auto md:mx-auto col-span-1 md:col-span-2 lg:col-span-1">
              <p>Fax:</p>
              <p>845-307-4189</p>
            </div>
          </div>
          <SocialMedia />
        </div>
      </div>

      <div className="sectionContainer p-5 bg-gray-300 mt-10">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;

const SocialMedia = () => {
  return (
    <div className="mx-auto mt-6 flex justify-center gap-x-6 items-center ">
      <a
        href="https://www.linkedin.com/company/growwellfunding"
        target="_linkedin"
        title="Linkedin"
      >
        <LinkedinIcon className="text-white/70 hover:text-white transition-colors duration-300" />
      </a>

      <a
        href="https://www.instagram.com/growwellfunding"
        target="_Instagram"
        title="Instagram"
      >
        <Instagram className="text-white/70 hover:text-white transition-colors duration-300" />
      </a>
    </div>
  );
};
