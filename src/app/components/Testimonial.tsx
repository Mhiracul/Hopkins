import Image from "next/image";
import React from "react";
import Tested from "../../../public/Tested.png";
import Fedpo from "../../../public/fedpo.png";
import Patricia from "../../../public/Patricia.png";
import Ruwolph from "../../../public/Ruwolph.png";
import { FaStar } from "react-icons/fa";

const StarRating: React.FC = () => {
  const totalStars = 5;

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <FaStar
          size={10}
          key={index}
          color={index === totalStars - 1 ? "#000000" : "#00BF63"}
        />
      ))}
    </div>
  );
};
const Testimonial = () => {
  return (
    <div className="bg-[#5FD595] h-full w-full">
      <div className="container mx-auto py-20 md:px-16 px-4 ">
        <div className="flex lg:flex-row flex-col justify-between lg:items-start gap-10 md:items-start items-center">
          <div className="flex flex-col  gap-10">
            <h2 className="md:text-4xl text-2xl md:text-start text-center  text-black font-semibold">
              Trusted and Rated <br /> by Our Clients
            </h2>
            <Image src={Tested} alt="logo" className="" />
          </div>

          <div className="flex flex-col gap-16">
            <div className="bg-[#E0E9F8] border border-[#FF3C3C] rounded-3xl shadow-sm shadow-[#000000]">
              <div className="flex px-4 py-5  gap-5">
                <div className="flex flex-col gap-4">
                  <div className="bg-white p-1">
                    <Image src={Fedpo} alt="logo" className="w-[120px]" />
                  </div>
                  <h5 className="text-black text-xs font-semibold">
                    Federal Polytechnic <br /> Nekede.
                  </h5>
                </div>

                <div className="flex flex-col gap-5">
                  <p className="text-black text-[11px] font-light">
                    "Hopkins is a true partner for our copier needs. We
                    initially turned to them <br /> for a copier purchase, and
                    their selection was impressive. The level of <br />{" "}
                    professionalism continued in their repair services, promptly
                    addressing <br /> any issues. The consultancy aspect added
                    immense value, helping us <br /> streamline our workflow.
                    Hopkins is more than a dealer; they're a <br />{" "}
                    comprehensive solution provider in the copier domain!"
                  </p>

                  <StarRating />
                </div>
              </div>
            </div>

            <div className="bg-[#E0E9F8] border border-[#000000] rounded-3xl shadow-sm shadow-[#000000]">
              <div className="flex px-4 py-5  gap-5">
                <div className="flex flex-col gap-4">
                  <div className="bg-white p-1">
                    <Image src={Patricia} alt="logo" className="w-[120px]" />
                  </div>

                  <h5 className="text-black text-xs font-semibold">
                    Patricia Group <br /> of Schools Asaba.
                  </h5>
                </div>

                <div className="flex flex-col gap-5">
                  <p className="text-black text-[11px] font-light">
                    "Hopkins has been our go-to for copier solutions, and their
                    service is <br /> unparalleled. From purchasing top-notch
                    copiers to efficient repairs and <br /> insightful
                    consultancy, they've consistently exceeded our expectations.
                    <br /> Their team is knowledgeable, responsive, and always
                    goes the extra mile.
                    <br />
                    We highly recommend Hopkins for anyone seeking quality
                    copier services."
                  </p>

                  <StarRating />
                </div>
              </div>
            </div>

            <div className="bg-[#E0E9F8] border border-[#00BF63] rounded-3xl shadow-sm shadow-[#000000]">
              <div className="flex px-4 py-5  gap-5">
                <div className="flex flex-col gap-4">
                  <div className="bg-white p-1">
                    <Image src={Ruwolph} alt="logo" className="w-[120px]" />
                  </div>
                  <h5 className="text-black text-xs font-semibold">
                    Ruwolph business
                    <br /> centre Owerri.
                  </h5>
                </div>

                <div className="flex flex-col gap-5">
                  <p className="text-black text-[11px] font-light">
                    Hopkins is a game-changer in the copier industry. As a
                    client, I've <br /> experienced their expertise in copier
                    sales, repair, and consultancy. The <br />
                    copiers they offer are of the highest quality, and their
                    repair services are <br /> swift and effective. What sets
                    them apart is their consultancy – they <br />
                    provided valuable insights that optimized our copier usage
                    and saved us <br /> both time and money. Trustworthy and
                    reliable, Hopkins is the ultimate choice for copier
                    solutions."
                  </p>

                  <StarRating />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
