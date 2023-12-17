import React, { ReactNode } from "react";
import { MdOutlinePhoneForwarded } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./hero.module.css";
import Link from "next/link";

interface PhoneLinkProps {
  phoneNumber: string;
}

const PhoneLink: React.FC<PhoneLinkProps> = ({ phoneNumber }) => {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="flex items-center md:text-xs text-[10px] font-normal space-x-1 cursor-pointer"
    >
      <MdOutlinePhoneForwarded />
      <span>{phoneNumber}</span>
    </a>
  );
};

interface EmailLinkProps {
  children: ReactNode;
}

const EmailLink: React.FC<EmailLinkProps> = ({ children }) => {
  return (
    <Link
      href="mailto:Hopkinstechnicalc@yahoo.com"
      className="flex gap-1 items-center md:text-xs text-[10px] font-normal space-x-1 cursor-pointer"
    >
      <CiMail />
      {children}
    </Link>
  );
};
const Hero: React.FC = () => {
  return (
    <div
      className={`relative bg-no-repeat bg-cover flex items-center h-full py-20 w-full ${
        styles["bg-cover"] // Apply the dynamic class
      }`}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className="absolute top-0 right-0 p-4 md:text-white text-black">
        <div className="flex items-center md:text-xs text-[10px] font-normal space-x-1 ">
          <EmailLink>Hopkinstechnicalc@yahoo.com</EmailLink>
        </div>
        <div className="flex items-center md:text-xs text-[10px] font-normal space-x-1 mt-1">
          <PhoneLink phoneNumber="08035420101" />
        </div>

        <div className="flex items-center cursor-pointer md:text-xs text-[10px] font-normal space-x-1 mt-1">
          <FaWhatsapp />

          <span>
            {" "}
            <Link href="https://wa.me/+2349092259966">09092259966</Link>
          </span>
        </div>
      </div>
      <div className="hidden sm:flex flex-row items-center px-4">
        {/* Vertical black line */}
        <div className="flex flex-col gap-10 items-center">
          {/* Four dots */}
          <div className="w-1 h-1 bg-[#00BF63] rounded-full mb-1"></div>
          <div className="border border-[#00BF63]  rounded-[10000px] p-2">
            <div className="w-1 h-1 bg-[#FF3C3C] text-center  rounded-full mb-1"></div>
          </div>
          <div className="w-1 h-1 bg-[#00BF63] rounded-full mb-1"></div>
          <div className="w-1 h-1 bg-[#00BF63] rounded-full"></div>
        </div>
        <hr className="border-black border-[0.5px] h-[40vh] my-0 mx-4" />
      </div>
      <div className="py-20 px-5 xl:px-6 lg:px-6 text-black md:text-start flex flex-col md:items-start items-center text-center">
        <h2 className="font-Montserrat relative flex items-center font-medium text-xl md:text-[42px] md:leading-[63px] leading-[30px]">
          Empower Your Office
          <br className="sm:flex hidden" /> Unleash the Copier Hero!
        </h2>
        <h2 className="font-Montserrat font-normal md:text-[15px] text-xs text-black  mt-5">
          Revolutionize Your Workflow with Precision and Speed! Introducing{" "}
          <br className="sm:flex hidden" />
          Hopkins’ Cutting-Edge Copiers – Where Innovation Meets Impeccable
          <br className="sm:flex hidden" />
          Performance. Elevate Your Printing Experience Today!
        </h2>

        <hr className="border-red-500 border-[1px] my-5 w-1/2" />
        {/* Green horizontal line */}
        <hr className="border-green-500 border-[1px] my-2 w-2/3" />
        <button className="bg-[#00BF63] px-10 py-3 rounded-md text-white font-Montserrat text-lg mt-10">
          <Link href="https://wa.me/+2349092259966">Contact Us</Link>
        </button>
      </div>
      {/* Style for smaller screens */}
    </div>
  );
};

export default Hero;
