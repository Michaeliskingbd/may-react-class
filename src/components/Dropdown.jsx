import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

const Dropdown = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="relative"
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      <div className="flex items-center gap-1">
        <li>Home</li>
        {showDropDown ? <BiChevronDown /> : <BiChevronRight />}
      </div>

      {showDropDown && (
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          className="absolute z-[2000] w-[150px] bg-white text-black p-3 font-semibold space-y-2 top-6 right-6 rounded-sm"
        >
          <li>Home 1</li>
          <li>Home 2</li>
          <li>Home 3</li>
        </div>
      )}
    </section>
  );
};

export default Dropdown;
