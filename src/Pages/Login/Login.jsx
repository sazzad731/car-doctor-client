import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Swal from "sweetalert2";
import SocialLogin from "../SharedComponent/SocialLogin";


const Login = () =>{
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email
        }
        //get jwt token
        fetch("https://car-doctor-server-alpha-murex.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(data => {
            Swal.fire({
              title: "Successful",
              text: "You successfully loged in",
              icon: "success",
            });
            localStorage.setItem('car-token', data.token)
            })
        navigate(from, {replace: true})
      })
      .catch(err => {
        Swal.fire({
          title: "Login error",
          text: "No account found. Please sign up befor login",
          icon: "error",
        });
        console.log(err);
      })
    
    
    form.reset();
  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col gap-14 lg:flex-row mb-36">
        <div className="md:w-1/2">
          <img className="w-full" src={img} alt="image" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body py-16">
            <h1 className="text-5xl font-semibold text-center mb-12">Login</h1>
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
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer absolute right-3 bottom-[39%]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
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
              Or Sign In with
            </p>
            <SocialLogin/>
            <p className="text-center text-lg text-[#737373]">
              Have an account?{" "}
              <Link to="/signup" className="text-[#FF3811] font-medium">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
