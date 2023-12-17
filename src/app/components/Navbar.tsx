"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { FiSearch, FiX } from "react-icons/fi";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const closeMobileMenu = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    // Add event listener to close the mobile menu when clicking outside
    document.addEventListener("click", closeMobileMenu);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", closeMobileMenu);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="bg-white shadow-sm shadow-[#00BF63] px-[6%] py-2 flex flex-row justify-between align-middle items-center ">
      <div className="flex flex-row align-middle gap-2 items-center">
        <Image src={Logo} alt="logo" className="w-[90px]" />
      </div>
      <div className="block md:hidden">
        <button onClick={handleMenuToggle}>
          <FaBars size={18} color="#000" />
        </button>
        {mobileMenuOpen && (
          <div className="absolute top-12 right-6 mt-2 py-2 w-[300px] bg-white shadow-sm shadow-[#00BF63] border rounded z-10">
            <div
              className={`${
                mobileMenuOpen ? "flex" : "hidden"
              } md:hidden flex-col h-full p-5 w-[300px] z-10 mt-0`}
            >
              <div className="mt-3 flex flex-col gap-6">
                <Link
                  to="product"
                  smooth={true}
                  duration={500}
                  className="text-black cursor-pointer font-Montserrat text-[12px]"
                >
                  Products
                </Link>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className="text-black cursor-pointer font-Montserrat text-[12px]"
                >
                  Services
                </Link>

                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-black cursor-pointer font-Montserrat text-[12px]"
                >
                  Contact
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-black cursor-pointer font-Montserrat text-[12px]"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex-row gap-10 md:flex hidden"></div>

      <div className="md:flex hidden flex-row gap-10 items-center">
        <Link
          to="product"
          smooth={true}
          duration={500}
          className="text-black cursor-pointer font-Montserrat text-[12px]"
        >
          Products
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="text-black cursor-pointer font-Montserrat text-[12px]"
        >
          Services
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-black cursor-pointer font-Montserrat text-[12px]"
        >
          Contact
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-black cursor-pointer font-Montserrat text-[12px]"
        >
          About Us
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
