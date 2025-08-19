import Button from "./utils/Button";

const HeroSection = () => {
  const winter = true;
  return (
    <div className="h-screen items-center flex bg-blue-600 ">
      <div className="space-y-4 pl-10">
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
