import { useContext, useEffect, useState } from "react";
import banner from "../../assets/cart-banner.png"
import { AuthContext } from "../../Context/AuthProvider";
import ItemRow from "./ItemRow";
import { Link } from "react-router-dom";
import turnLeftArrow from "../../assets/icons/turn-left.svg"
import { FaRegTrashCan } from "react-icons/fa6";


const CartDetail = () =>{
  const { user } = useContext(AuthContext);
  const [ orders, setOrders ] = useState([]);
  
  useEffect(() => {
    fetch(`https://car-doctor-server-alpha-murex.vercel.app/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);


  const handleDeleteOne = (id) => {
    fetch(`https://car-doctor-server-alpha-murex.vercel.app/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = orders?.filter((odr) => odr._id !== id);
          setOrders(remaining);
        }
      });
  };

  const handleDeleteMultiple = ()=>{
    fetch("https://car-doctor-server-alpha-murex.vercel.app/orders", {
      method: "DELETE",
    })
      .then(data => {
        const remaining = orders?.filter((ord) => ord._id === orders._id);
        if(data.ok){
          setOrders(remaining);
        }
      })
      .catch(err=>console.err(err))
  }


  return (
    <div className="min-h-screen px-2">
      <div className="relative mb-32">
        <img className="w-full" src={banner} alt="Banner" />
        <div className="w-full h-full flex flex-col justify-center absolute top-0 left-0 ps-28 rounded-xl bg-gradient-to-r from-[#151515]">
          <h2 className="text-4xl font-bold text-white">Cart Details</h2>
          <p className=" text-base font-medium text-red-600">
            Home - Product Details
          </p>
        </div>
      </div>

      <div className="overflow-x-auto mb-32">
        <table className="table mb-12">
          <tbody>
            {/* row */}
            {orders?.length > 0 ? (
              orders?.map((service) => (
                <ItemRow
                  order={service}
                  handleDelete={handleDeleteOne}
                  key={service._id}
                />
              ))
            ) : (
              <tr>
                <td className="text-3xl font-semibold">No service added</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="flex items-center gap-5">
            <img src={turnLeftArrow} alt="Icon" /> Continue Shopping
          </Link>

          <button onClick={handleDeleteMultiple} className="flex items-center gap-5"><FaRegTrashCan/> Clear Shopping Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;