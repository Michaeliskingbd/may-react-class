import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const toggleMobileNav = () => {
    setMobileNav(true);
  };
  const closeMobileNav = () => {
    setMobileNav(false);
  };
  return (
    <div>
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-400 text-white">
        <div className="text-2xl font-bold">
          <img
            src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img-140x47.png"
            alt="logo"
          />
        </div>
        <div>
          <ul className="flex justify-between gap-4 cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <button className="bg-black px-6 py-2 rounded-full hover:bg-red-500 hover:text-blue-500">
            Login
          </button>
        </div>
        <div className="flex lg:hidden">
          {mobileNav ? (
            <button onClick={closeMobileNav} className="z-[1000]">
              <IoMdClose className=" text-black text-4xl" />
            </button>
          ) : (
            <button onClick={toggleMobileNav} className="z-[1000]">
              <IoIosMenu className=" text-black text-4xl" />
            </button>
          )}
        </div>
      </nav>

      {mobileNav && (
        <aside className=" w-[80%] absolute bg-white right-0 top-0 h-screen lg:hidden block">
          <div className="py-6">
            <FaUser className="ml-4 text-4xl mb-4" />
            <ul className="divide-y-2 ">
              <li className="p-4">EVERYTHING</li>
              <li className="p-4">WOMEN</li>
              <li className="p-4">MEN</li>
              <li className="p-4">ACCESSORIES</li>
            </ul>
            <span className="pl-4 mt-5">About</span>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Navbar;
