import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#60D796]  h-full py-10 flex items-center">
      <div className="container mx-auto py-20 px-6 bg-[#95DCC2]">
        <div className="flex lg:flex-row md:flex-col gap-6 flex-col ">
          <div className="flex flex-col gap-16">
            <h3 className="text-black md:text-start text-center  text-2xl font-semibold">
              Subscribe to our <br /> Newsletter
            </h3>

            <div className="bg-[#6FDBA7] py-2 px-4 flex items-center justify-between">
              {/* Input for email */}
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border-none outline-none font-semibold text-white placeholder-black placeholder-opacity-[75%] flex-1"
              />

              <div className="bg-[#00BF63] rounded-sm p-2 ml-2">
                <FaLongArrowAltRight color="white" size={20} />
              </div>
            </div>
            <p className="text-black hidden lg:block text-opacity-[35%] py-3 font-semibold">
              Copyright 2023 Hopkins Technical Company. All Rights Reserved.
            </p>
          </div>

          <div className="grid grid-cols-1 py-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8">
            <div className="col-span-1">
              <h4 className="text-black font-semibold text-lg mb-4">
                Useful Links
              </h4>

              <ul className="text-black text-opacity-[35%] font-semibold text-xs">
                <li>
                  <Link href="/">Find Products</Link>
                </li>
                <li>
                  <Link href="/">Services</Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-black font-semibold text-lg mb-4">About</h4>
              <ul className="text-black text-opacity-[35%] font-semibold text-xs">
                <li>
                  <Link href="/">About Us</Link>
                </li>
                <li>
                  <Link href="/">How It Works</Link>
                </li>
                <li>
                  <Link href="/">Contact Us</Link>
                </li>
              </ul>{" "}
            </div>

            <div className="col-span-1">
              <h4 className="text-black font-semibold text-lg mb-4">Terms</h4>
              <ul className="text-black text-opacity-[35%] font-semibold text-xs">
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/">Terms and Conidtion</Link>
                </li>
                <li>
                  <Link href="/">Security</Link>
                </li>
              </ul>{" "}
            </div>

            <div className="col-span-1">
              <h4 className="text-black font-semibold text-lg mb-4">Contact</h4>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  className="text-black text-opacity-[35%] font-semibold text-xs"
                  href="/"
                >
                  52 Njemanze Street <br />
                  Owerri, Imo State, Nigeria. <br />
                  Hopkinstechnicalc@yahoo.com <br />
                  Phone: 08035420101 <br />
                  Whatsapp: 09092259966
                </Link>
              </div>
            </div>
          </div>
          <p className="lg:hidden mt-10 text-center text-xs border-t  border-opacity-40 text-black text-opacity-[35%] py-3 font-semibold">
            Copyright 2023 Hopkins Technical Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
