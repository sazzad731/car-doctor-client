import { Link } from "react-router-dom";
import { FaArrowRight as FaArrowRightLong } from "react-icons/fa6";
const ServiceCard = ({info}) => {
  const {_id, title, img, price } = info;
  return (
    <div className="card w-96 bg-base-100 shadow-xl place-self-center">
      <figure className="px-6 pt-6">
        <img src={img} alt="Service" className="rounded-xl" />
      </figure>
      <div className="card-body gap-0 text-start">
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <div className="flex items-center">
          <p className="text-xl font-semibold text-[#FF3811]">
            Price: ${price}
          </p>
          <div className="card-actions">
            <Link to={`/service_detail/${_id}`} className="text-xl font-extralight p-2 text-[#FF3811]">
              <FaArrowRightLong/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;