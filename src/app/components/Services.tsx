import Image from "next/image";
import React from "react";
import Sales from "../../../public/sales.svg";
import Consultancy from "../../../public/consultancy.svg";
import Repairs from "../../../public/repairs.svg";

const Services = () => {
  return (
    <div className=" flex bg-black text-white items-center h-full py-20 w-full">
      <div className=" container mx-auto lg:px-20 md:px-10 px-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        <div className="flex flex-col items-center space-y-2">
          <Image src={Sales} alt="logo" className="w-[40px]" />
          <h3 className="text-sm font-semibold">Sales</h3>
          <p className="text-center md:text-xs text-[10px] font-light">
            Introducing our latest range of high-performance copiers, designed
            to streamline your office workflow and boost productivity. From
            high-speed document processing to advanced scanning and printing
            capabilities, our copiers are built to meet the demands of modern
            businesses.️
          </p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Image src={Consultancy} alt="logo" className="w-[40px]" />
          <h3 className="text-sm font-semibold">Consultancy</h3>
          <p className="text-center md:text-xs text-[10px] font-light">
            Are you looking to optimize your office's document management and
            printing solutions? Our expert consultancy services offer tailored
            advice on selecting the perfect copier solutions for your business
            needs. With our in-depth industry knowledge and commitment to
            customer satisfaction, we'll guide you towards maximizing
            productivity and minimizing downtime.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Image src={Repairs} alt="logo" className="w-[40px]" />
          <h3 className="text-sm font-semibold">Repairs</h3>
          <p className="text-center md:text-xs text-[10px] font-light">
            Experience downtime with your copier? Our team of skilled
            technicians specializes in the rapid and reliable repair of copiers.
            With a wealth of expertise and a commitment to customer
            satisfaction, we diagnose and resolve copier issues swiftly,
            ensuring minimal disruption to your workflow. Whether it's a minor
            glitch or a major malfunction, trust our professionals to restore
            your copier to peak performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
