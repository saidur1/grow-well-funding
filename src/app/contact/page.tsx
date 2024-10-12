import ContactForm from "@/components/common/contact-form";

const Contact = () => {
  return (
    <section className="min-h-screen space-y-10 pb-10">
      <div
        className=" relative h-[400px] md:h-[320px] bg-no-repeat bg-cover bg-fixed bg-gray-100"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/5845710/pexels-photo-5845710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="absolute top-1/2  -translate-x-1/2  -translate-y-1/2  left-1/2 w-full">
          <h1 className="text-white font-nunito font-semibold text-[25px] md:text-[40px] text-center">
            Apply Now & Get Approved Instantly
          </h1>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-4 text-white font-nunito  text-[19px] px-8">
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
        </div>
      </div>

      <div className="sectionContainer p-5 bg-gray-300 mt-10">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
