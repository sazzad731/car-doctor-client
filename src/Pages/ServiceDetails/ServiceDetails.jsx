import { Link, useLoaderData } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import logo from "../../assets/logo-white.svg"

const ServiceDetails = () => {
  const details = useLoaderData();
  const { title, description, facility, service_img, price, _id } = details;
  return (
    <div className="flex justify-between gap-6 flex-col lg:flex-row p-3 xl:p-0">
      <div className="lg:w-3/4 w-full ">
        <img
          className="mb-12 w-full h-[400px] object-cover rounded-xl"
          src={service_img}
          alt="Service image"
        />
        <h2 className="text-4xl font-bold mb-8">{title}</h2>
        <p className=" text-[#737373] mb-8">{description} </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {facility?.map((item) => {
            return (
              <div
                className="flex flex-col items-center justify-center bg-[#F3F3F3] border-t-2 border-[#FF3811] py-10 px-10 rounded-xl"
                key={item.name}
              >
                <div>
                  <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                  <p className=" text-[#737373]">{item.details}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-[#737373] mb-12">{description}</p>
        <h2 className="text-4xl font-bold mb-8">3 Simple Steps to Process</h2>
        <p className="text-[#737373] mb-8">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center justify-center py-10 border-[1px] rounded-xl">
            <div className="flex items-center justify-center rounded-full bg-[#ffad9d] w-20 h-20 mb-5">
              <span className="flex items-center justify-center rounded-full bg-[#ff2a00] text-xl font-bold text-white w-14 h-14">
                01
              </span>
            </div>
            <h3 className="text-xl font-bold">Step One</h3>
            <p className="text-[#737373]">It uses a dictionary of over 200 .</p>
          </div>
          <div className="flex flex-col items-center justify-center py-10 border-[1px] rounded-xl">
            <div className="flex items-center justify-center rounded-full bg-[#ffad9d] w-20 h-20 mb-5">
              <span className="flex items-center justify-center rounded-full bg-[#ff2a00] text-xl font-bold text-white w-14 h-14">
                02
              </span>
            </div>
            <h3 className="text-xl font-bold">Step Two</h3>
            <p className="text-[#737373]">It uses a dictionary of over 200 .</p>
          </div>
          <div className="flex flex-col items-center justify-center py-10 border-[1px] rounded-xl">
            <div className="flex items-center justify-center rounded-full bg-[#ffad9d] w-20 h-20 mb-5">
              <span className="flex items-center justify-center rounded-full bg-[#ff2a00] text-xl font-bold text-white w-14 h-14">
                03
              </span>
            </div>
            <h3 className="text-xl font-bold">Step Three</h3>
            <p className="text-[#737373]">It uses a dictionary of over 200 .</p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/4">
        <div className="bg-base-200 w-full rounded-md py-10 px-10 mb-8">
          <h3 className="text-2xl font-bold mb-5">Services</h3>
          <div>
            <button className="flex items-center justify-between w-full p-4 bg-[#FF3811] text-white font-semibold rounded-md mb-5">
              Full Car Repair <FaArrowRight />
            </button>
            <button className="flex items-center justify-between w-full p-4 bg-white font-semibold rounded-md mb-5">
              Engine Repair
              <FaArrowRight />
            </button>
            <button className="flex items-center justify-between w-full p-4 bg-white font-semibold rounded-md mb-5">
              Automatic Services <FaArrowRight />
            </button>
            <button className="flex items-center justify-between w-full p-4 bg-white font-semibold rounded-md mb-5">
              Engine Oil Change <FaArrowRight />
            </button>
            <button className="flex items-center justify-between w-full p-4 bg-white font-semibold rounded-md mb-5">
              Battery Charge <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="bg-black text-white w-full rounded-md py-10 px-10 mb-8">
          <h3 className="text-2xl font-bold mb-5">Download</h3>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <BsFileEarmarkBarGraph className=" w-6 h-6" />
              <div>
                <p className="text-lg font-semibold">Our Brochure</p>
                <p className="text-base font-normal text-[#A2A2A2]">Download</p>
              </div>
            </div>
            <button className="p-3 text-white bg-[#FF3811] rounded-md">
              <FaArrowRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BsFileEarmarkBarGraph className=" w-6 h-6" />
              <div>
                <p className="text-lg font-semibold">Company Details</p>
                <p className="text-base font-normal text-[#A2A2A2]">Download</p>
              </div>
            </div>
            <button className="p-3 text-white bg-[#FF3811] rounded-md">
              <FaArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-black text-white py-14 px-10 mb-8 rounded-md relative">
          <img className="mb-5" src={logo} alt="logo" />
          <p className=" text-xl font-bold text-center mb-8">
            Need Help? We Are Here To Help You
          </p>
          <div className="py-5 px-7 bg-white rounded-xl text-black">
            <p className="text-xl font-bold text-center">
              <span className=" text-[#FF3811]">Car Doctor</span> Special
            </p>
            <p className="text-center text-base font-bold text-[#737373] mb-9">
              Save up to <span className="text-[#FF3811]">60% off</span>
            </p>
          </div>
          <button className="bg-[#FF3811] py-4 px-8 text-lg font-semibold rounded-md absolute bottom-7">
            Get A Quote
          </button>
        </div>

        <h2 className=" text-4xl font-bold mb-8">Price: ${price}</h2>
        <Link to={`/checkout/${_id}`}>
          <button className="w-full py-4 bg-[#FF3811] rounded-md text-white text-lg font-semibold">
            Proceed Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;