import React from "react";
import Sales from "../../../public/saless.svg";
import Image from "next/image";

const Service = () => {
  return (
    <div
      className="bg-[#5FD595] h-full
     w-full"
    >
      <div
        className="container mx-auto lg:px-32 md:px-10 px-8 py-20"
        id="services"
      >
        <h2 className="text-black text-lg text-center  font-bold w-full">
          SERVICES
        </h2>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-8 gap-8">
          <div className="bg-white rounded-2xl px-3 py-6">
            <div className="flex text-black  gap-4 items-center">
              <Image src={Sales} alt="logo" className="w-[50px] " />
              <div className="flex flex-col  gap-1">
                <h3 className="text-lg font-semibold">
                  Sales Of Quality Copiers
                </h3>
                <p className="text-xs font-light">
                  Introducing our latest range of high-performance copiers,{" "}
                  <br />
                  designed to streamline your office workflow and boost <br />
                  productivity. From high-speed document processing to <br />{" "}
                  advanced scanning and printing capabilities, our copiers{" "}
                  <br /> are built to meet the demands of modern businesses.️
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl px-3 py-6">
            <div className="flex text-black  gap-4 items-center">
              <Image src={Sales} alt="logo" className="w-[50px] " />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">Consultancy</h3>
                <p className="text-xs font-light">
                  Our expert consultancy services offer tailored advice on
                  selecting <br /> the perfect copier solutions for your
                  business needs. With our in- <br /> depth industry knowledge
                  and commitment to customer <br /> satisfaction, we'll guide
                  you towards maximizing productivity and <br /> minimizing
                  downtime.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl px-3 py-6">
            <div className="flex text-black  gap-4 items-center">
              <Image src={Sales} alt="logo" className="w-[50px] " />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">Repairs</h3>
                <p className="text-xs font-light">
                  Experience downtime with your copier? Our team of skilled
                  technicians <br /> specializes in the rapid and reliable
                  repair of copiers. With a wealth of <br /> expertise and a
                  commitment to customer satisfaction, we diagnose <br /> and
                  resolve copier issues swiftly, ensuring minimal disruption to
                  your <br /> workflow.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl px-3 py-6">
            <div className="flex text-black  gap-4 items-center">
              <Image src={Sales} alt="logo" className="w-[50px]" />
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold">Consumables</h3>
                <p className="text-xs font-light">
                  Boost your office productivity with our premium copier
                  consumables! <br /> From high-quality toner cartridges to
                  reliable paper supplies, we've <br /> got everything you need
                  to keep your copiers running smoothly. Say <br /> goodbye to
                  downtime and hello to seamless printing. Contact us <br />{" "}
                  today to streamline your office operations!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl px-3 py-6">
            <div className="flex text-black  gap-4 items-center">
              <Image src={Sales} alt="logo" className="w-[50px] " />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">Spare Parts</h3>
                <p className="text-xs font-light">
                  Empower your office equipment with our premium copier spare
                  parts! <br /> From essential replacement components to
                  specialized maintenance <br /> kits, we provide high-quality
                  parts to keep your copiers operating at <br /> peak
                  performance. Say goodbye to downtime and hello to seamless{" "}
                  <br /> printing.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl px-3 py-6">
            <div className="flex text-black  gap-4 items-center">
              <Image src={Sales} alt="logo" className="w-[50px] " />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">Training</h3>
                <p className="text-xs font-light">
                  Master the art of efficient printing with our comprehensive
                  copier <br /> training program. Equip your team with the
                  knowledge and skills to <br /> maximize productivity,
                  troubleshoot common issues, and optimize <br /> copier
                  settings. Our expert-led training ensures that your staff can{" "}
                  <br /> harness the full potential of your office equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
