import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Swal from "sweetalert2";
import SocialLogin from "../SharedComponent/SocialLogin";




const SignUp = () => {
  const [ showPassword, setShowPassword ] = useState(false);
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name
        })
        Swal.fire({
          title: "Successful",
          text: "You successfully sign up",
          icon: "success",
        });
        navigate("/");
      })
      .catch((err) => console.log(err));
    
    form.reset();
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col gap-14 lg:flex-row mb-36">
        <div className="md:w-1/2">
          <img className="w-full" src={img} alt="image" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body py-16">
            <h1 className="text-5xl font-semibold text-center mb-12">
              Sign Up
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Password
                </span>
              </label>
              <input
                type={showPassword ? "text": "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label onClick={()=>setShowPassword(!showPassword)} className="cursor-pointer absolute right-3 bottom-[39%]">
                {showPassword?<FaEyeSlash/>:<FaEye/>}
              </label>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 mb-8">
              <button
                type="submit"
                className="btn bg-[#FF3811] text-white text-xl font-semibold"
              >
                Sign In
              </button>
            </div>
            <p className="text-lg font-medium text-center mb-8">
              Or Sign Up with
            </p>
            <SocialLogin/>
            <p className="text-center text-lg text-[#737373]">
              Already have an account?{" "}
              <Link to="/login" className="text-[#FF3811] font-medium">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
