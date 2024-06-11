import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const { _id, title, price, img } = useLoaderData();
  const { user } = useContext(AuthContext);
  
  const handleOrder = (event) =>
  {
    event.preventDefault();

    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || "Unregistered";
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
      img
    }

    fetch("https://car-doctor-server-alpha-murex.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then(() => {});
    

    form.reset();
  }
  return (
    <div className="mb-32">
      <form onSubmit={handleOrder} className="px-2 md:px-24 py-24 bg-base-200 rounded-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <label className="input input-bordered flex items-center w-full">
            <input type="text" name="firstName" className="grow" placeholder="First Name" />
          </label>
          <label className="input input-bordered flex items-center w-full">
            <input type="text" name="lastName" className="grow" placeholder="Last Name" />
          </label>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <label className="input input-bordered flex items-center w-full">
            <input type="number" name="phone" className="grow" placeholder="Your Phone" />
          </label>
          <label className="input input-bordered flex items-center w-full">
            <input type="email" name="email" defaultValue={user?.email} className="grow" placeholder="Your Email" readOnly />
          </label>
        </div>
        <textarea
          placeholder="Your Message"
          name="message"
          className="textarea textarea-bordered textarea-lg w-full mb-6"
          rows="7"
        ></textarea>
        <button
          type="submit"
          className="py-4 w-full rounded-xl bg-[#FF3811] hover:bg-[#FF5811] text-white text-xl font-semibold"
        >
          Order Confirm
        </button>
      </form>
    </div>
  );
};

export default CheckOut;