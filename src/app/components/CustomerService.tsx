import Image from "next/image";
import React from "react";
import Customer from "../../../public/customer.png";

const CustomerService: React.FC = () => {
  return (
    <div className="relative bg-cover bg-[#CED6E5]  h-full w-full" id="contact">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/Mesh.png')", // Replace with your image URL
        }}
      ></div>
      <div className="container mx-auto lg:px-32 md:px-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
          <div className=" flex flex-col md:items-start items-center  text-black">
            {/* Text */}
            <h2 className="text-4xl md:text-start text-center font-semibold mb-6">
              Connect With Our <br /> Customer Service Agent.
            </h2>

            {/* Contact Us Button */}
            <button className="bg-[#00BF63] px-4 w-40 py-3 rounded-md text-white font-Montserrat text-lg mt-10">
              Contact Us
            </button>
          </div>

          {/* Image on the right side */}
          <div className="flex justify-center">
            <Image src={Customer} alt="logo" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
