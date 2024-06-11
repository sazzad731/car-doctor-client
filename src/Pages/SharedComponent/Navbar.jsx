import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import { AiOutlineShopping } from "react-icons/ai";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = ()=>{
    logOut()
      .then(() =>{
        Swal.fire({
          title: "Successful",
          text: "You loged out successfully",
          icon: "success",
        });
      })
      .catch(err => console.log(err))
  }
  
  const navItem = (
    <>
      <li>
        <Link className="text-lg font-semibold" to="/">Home</Link>
      </li>
      <li>
        <Link className="text-lg font-semibold">About</Link>
      </li>
      <li>
        <Link className="text-lg font-semibold">Services</Link>
      </li>
      <li>
        <Link className="text-lg font-semibold">Blog</Link>
      </li>
      <li>
        <Link className="text-lg font-semibold">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 h-28 mb-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/cart-detail" className="btn btn-ghost btn-circle">
          <AiOutlineShopping className="w-6 h-6"/>
        </Link>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        {
          user ? <button onClick={handleSignOut} className="btn btn-outline btn-error">Sign out</button>:""
        }
      </div>
    </div>
  );
};

export default Navbar;