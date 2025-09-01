import { useState } from "react";
import { FaBell, FaUser } from "react-icons/fa";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  const Notify = [
    {
      body: "You have an uncompleted order in your cart",
    },
    {
      body: "You have 100 views last week",
    },
    {
      body: "John Sent you a friend request",
    },
  ];

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
            <Dropdown />
            <Link to="/about">
              <li>About</li>
            </Link>

            <li>Contact</li>
          </ul>
        </div>
        <div className="hidden  space-x-4 lg:flex items-center">
          <button onClick={toggleNotification}>
            <FaBell className="text-xl" />
          </button>
          <button className="bg-black px-6 py-2 rounded-full hover:bg-red-500 hover:text-blue-500">
            Login
          </button>
        </div>
        <div className="flex lg:hidden">
          <button onClick={toggleMobileNav} className="z-[20002]">
            {mobileNav ? (
              <IoMdClose className=" text-black text-4xl" />
            ) : (
              <IoIosMenu className=" text-black text-4xl" />
            )}
          </button>
        </div>
      </nav>

      {showNotification && (
        <article
          data-aos="fade-left"
          data-aos-duration="500"
          className="z-[1100] rounded-md bg-white p-4 divide-y-[1px] text-sm w-[400px] h-fit space-y-4 shadow-lg absolute right-10 top-16 "
        >
          {Notify.map((n, index) => (
            <div key={index} className="w-full ">
              {n.body}
            </div>
          ))}
        </article>
      )}

      {mobileNav && (
        <aside className="z-[2001] w-[80%] absolute bg-white right-0 top-0 h-screen lg:hidden block">
          <div className="py-6">
            <FaUser className="ml-4 text-4xl mb-4" />
            <ul className="divide-y-2 ">
              <li className="p-4">EVERYTHING</li>
              <ul
                className="p-4 hover:cursor-pointer transition-all duration-500"
                onClick={() => setOpen(!open)}
              >
                HOME
                {open && (
                  <div className="space-y-2 ml-3 mt-2 font-semibold transition-all duration-500 ">
                    <li>Home 1</li>
                    <li>Home 2</li>
                    <li>Home 3</li>
                  </div>
                )}
              </ul>
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
