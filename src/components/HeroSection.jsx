import Button from "./utils/Button";

const HeroSection = () => {
  const winter = true;
  return (
    <div className="relative h-screen items-center flex bg-[url('https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg')] bg-cover bg-center ">
      <div className="bg-black opacity-30 absolute inset-0"></div>
      <div className="space-y-4 pl-10 z-[1000]">
        {winter ? (
          <h1 className="text-5xl text-white">
            Raining Offers For <br /> Cold Winter!
          </h1>
        ) : (
          <h1 className="text-5xl text-white">
            Raining Offers For <br /> Hot Summer!
          </h1>
        )}
        <h2
          className="text-3xl text-[#ffff]
          "
        >
          25% Off on All Product
        </h2>
        <div className="space-x-8 flex ">
          <Button />
          <button className="border-[1px] border-white text-white px-8 py-4 hidden lg:flex ">
            Find More
          </button>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
