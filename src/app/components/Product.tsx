import React from "react";
import Print1 from "../../../public/print1.png";
import Print2 from "../../../public/print2.png";
import Print3 from "../../../public/print3.png";
import Print4 from "../../../public/print4.png";
import Image from "next/image";

const Product = () => {
  return (
    <div id="product" className="bg-white h-full py-20 w-full">
      <h1 className="text-black pb-10 text-xl font-bold uppercase text-center">
        Product
      </h1>

      <div className="container mx-auto  lg:px-32 md:px-10 px-4">
        <div className="grid lg:grid-cols-2  mt-10 grid-cols-1 gap-20">
          <div className="flex flex-col lg:flex-col-reverse md:items-start items-center">
            <div className="flex gap-5">
              <Image
                src={Print1}
                alt="logo"
                className="object-cover  sm:w-full w-32 max-w-full max-h-[200px]"
              />
              <Image
                src={Print2}
                alt="logo"
                className="object-cover sm:w-full w-32 max-w-full max-h-[200px]"
              />
            </div>
            <div className="flex  gap-5">
              <Image
                src={Print3}
                alt="logo"
                className="mt-3 object-cover sm:w-full w-32 max-w-full max-h-[200px]"
              />
              <Image
                src={Print4}
                alt="logo"
                className="mt-1 object-cover sm:w-full w-32 max-w-full max-h-[200px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 md:items-start items-center">
            <h1 className="text-black md:text-start text-center text-3xl font-semibold">
              Explore Our Range <br /> of Quality Copiers
            </h1>

            <p className="md:text-base text-xs  md:text-start text-center font-normal text-black">
              Our copiers are built to deliver exceptional print quality,
              reliability, and durability, ensuring that your documents always
              make a lasting impression. Streamline your workflow and boost
              productivity with our cutting-edge copiers, equipped with advanced
              features to meet your evolving business demands.
            </p>

            <button className="bg-[#BB3526] w-1/2 py-3 rounded-md text-white  text-lg mt-10">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
