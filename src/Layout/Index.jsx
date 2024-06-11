import { Outlet } from "react-router-dom";
import Footer from "../Pages/SharedComponent/Footer";
import Navbar from "../Pages/SharedComponent/Navbar";

const Index = () => {
  return (
    <>
      <div className=" max-w-7xl mx-auto">
        <Navbar />
        <Outlet />
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
};

export default Index;
