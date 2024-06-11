import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { FaCalendarDays, FaRegClock, FaPhone, FaLocationDot } from "react-icons/fa6";
import { BiSolidMessageRoundedDots } from "react-icons/bi";

const Services = () => {
  const [ services, setServices ] = useState([]);
  useEffect(() => {
    fetch("https://car-doctor-server-alpha-murex.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="text-center">
      <div>
        <h3 className="text-xl font-bold text-[#FF3811] mb-5">Services</h3>
        <h2 className="text-5xl font-bold mb-5">Our Service Area</h2>
        <p className="text-[#737373] mb-12">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don&apos;t look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
        {services?.map((card) => (
          <ServiceCard key={card._id} info={card} />
        ))}
      </div>
      <button className="btn btn-outline btn-error text-lg font-semibold  mb-32">
        More Services
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full bg-black text-white py-24 px-5 rounded-xl mb-32">
        <div className="flex items-center lg:justify-center mb-5 lg:mb-0">
          <div className="relative w-11 h-11 me-5">
            <FaCalendarDays className=" w-10 h-10" />
            <FaRegClock className="text-black bg-red-600 rounded-full w-5 h-5 absolute bottom-0 right-0" />
          </div>
          <div>
            <p className="font-medium text-start">We are open monday-friday</p>
            <p className="text-2xl font-bold">7:00 am - 9:00 pm</p>
          </div>
        </div>
        <div className="flex items-center lg:justify-center mb-5 md:mb-0">
          <div className="relative w-12 h-12 me-5">
            <FaPhone className=" w-10 h-10 absolute bottom-0" />
            <BiSolidMessageRoundedDots className=" text-red-600 w-8 h-8 absolute top-0 right-0" />
          </div>
          <div>
            <p className="font-medium text-start">Have a question?</p>
            <p className="text-2xl font-bold">+2546 251 2658</p>
          </div>
        </div>
        <div className="flex items-center lg:justify-center">
          <div className="relative w-10 h-11 me-5">
            <FaLocationDot className="text-red-600 w-10 h-10 z-50 absolute top-0" />
            <div className="bg-white rounded-[100%] w-9 h-3 z-40 absolute bottom-0 left-[0.1rem]"></div>
          </div>
          <div>
            <p className="font-medium text-start">Need a repair? our address</p>
            <p className="text-2xl font-bold">Liza Street, New York</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;