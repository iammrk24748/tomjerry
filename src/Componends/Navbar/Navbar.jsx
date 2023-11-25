import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white">
        <div className="flex-1">
          <Link to="/">
            <p className="btn btn-ghost text-xl text-[#333333]">Tom & Jerry</p>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-[#333333]">
            <Link to="/">
              <li className="px-5 py-3 hover:bg-[#333333] hover:text-white">
                Home
              </li>
            </Link>

            <Link to="about">
              <li className="px-5 py-3 hover:bg-[#333333] hover:text-white">
                About
              </li>
            </Link>
            <Link to="portfolio">
              <li className="px-5 py-3 hover:bg-[#333333] hover:text-white">
                Portfolio
              </li>
            </Link>

            <Link to="services">
              <li className="px-5 py-3 hover:bg-[#333333] hover:text-white">
                Services
              </li>
            </Link>
            <Link to="contact">
              <li className="px-5 py-3 hover:bg-[#333333] hover:text-white">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
