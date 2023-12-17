import Image from "next/image";
import React from "react";
import Sharp from "../../../public/Sharp.svg";

const About = () => {
  return (
    <div className="h-full w-full" id="about">
      <div className="container mx-auto py-20 md:px-16 px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-center font-bold text-3xl uppercase">
            about us
          </h1>

          <h2 className="text-white py-20 text-center text-xl font-medium">
            Hopkins: Your Trusted Source for Sharp Digital Photocopiers
          </h2>

          <p className="text-white  text-center text-xs font-normal">
            For over two decades, Hopkins has been a leading expert in sharp
            digital photocopiers. Our commitment to excellence and innovation
            has made <br /> us a trusted name in the industry, serving
            businesses, educational institutions, and organizations of all
            sizes. Choose Hopkins for top-of-the-line <br /> products,
            unparalleled technical support, and tailored solutions to meet your
            unique needs.
          </p>

          <Image src={Sharp} alt="logo" className="w-[60px] mt-10" />
        </div>
      </div>
    </div>
  );
};

export default About;
