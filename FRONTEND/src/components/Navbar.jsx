import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiLogIn } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="z-50 min-h-[81px] fixed top-0 flex justify-between items-center px-5 py-4 w-full bg-black text-white">
      <div>
        <h3 className="flex gap-2 font-bold text-2xl text-red-500 items-center justify-center">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-15 object-contain mx-auto"
          />
          Fitguysweb
        </h3>
      </div>

      <div>
        <ul className="flex gap-40 navlink">
          <Link className=" text-lg font-medium hover:font-bold hover:text-red-500" to="/about">
            About
          </Link>
          <Link className="text-lg font-medium hover:font-bold hover:text-red-500" to="/services">
            Services
          </Link>
          <Link className=" text-lg font-medium hover:font-bold hover:text-red-500" to="/bmiCalculator">
            BMI Calculator
          </Link>
          <Link className=" text-lg font-medium hover:font-bold hover:text-red-500" to="/contact">
            Contact
          </Link>
        </ul>
      </div>

      <div className="join-btn">
        <Link
          to="/signup" // Uncomment if you have a signup route
          className="p-2 border-4 rounded-md hover:bg-red-500 hover:text-white flex gap-3 items-center justify-center font-medium"
        >
          SignUp
          <FiLogIn size={20} />
        </Link>
      </div>
    </div>
  );
}
