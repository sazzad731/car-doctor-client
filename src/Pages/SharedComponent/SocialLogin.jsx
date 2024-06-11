import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignin } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

  const handleGoogleSignin = ()=>{
    googleSignin()
      .then(result =>
      {
        const user = result.user;
        console.log(user);
        const currentUser = {
          email: user.email
        }
        // get jwt token
        fetch("https://car-doctor-server-alpha-murex.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Successful",
              text: "You successfully loged in",
              icon: "success",
            });
            localStorage.setItem("car-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch(err => console.error(err.message))
  }
  return (
    <div className="flex items-center justify-center gap-5 mb-12">
      <button>
        <FaFacebook className="w-8 h-8" />
      </button>
      <button>
        <FaLinkedinIn className="w-8 h-8" />
      </button>
      <button>
        <FcGoogle onClick={handleGoogleSignin} className="w-8 h-8" />
      </button>
    </div>
  );
};

export default SocialLogin;
