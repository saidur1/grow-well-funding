const Page = () => {
  return (
    <section className="min-h-screen">
      <div
        className=" relative h-[220px] bg-no-repeat bg-cover bg-fixed bg-gray-100"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/5845710/pexels-photo-5845710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="absolute top-1/2  -translate-x-1/2  -translate-y-1/2  left-1/2">
          <h1 className="text-white font-nunito font-bold text-[40px]">
            Equipment Financing
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Page;
