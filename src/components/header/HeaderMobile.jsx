import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { MdClose } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { TbDoorExit } from "react-icons/tb";
import { RiUserStarFill } from "react-icons/ri";

const HeaderMobile = ({ activeLink, user, labelEmail, logout }) => {
  const [showMenu, setShowMenu] = useState(false);

  const mostarMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <label className="absolute right-6 top-6 md:hidden swap swap-rotate">
        <input type="checkbox" />
        <HiOutlineMenuAlt3
          className="text-5xl cursor-pointer swap-off"
          onClick={mostarMenu}
        />
        <MdClose
          className="text-5xl cursor-pointer swap-on"
          onClick={mostarMenu}
        />
      </label>
      <div
        onClick={mostarMenu}
        className={
          showMenu
            ? "z-40 flex flex-col p-3 fixed inset-0 right-1/3 bg-black/40 backdrop-blur-xl gap-8 "
            : "hidden"
        }
      >
        <ul className="flex flex-col gap-6   justify-center">
          <li className="flex justify-between items-center">
            <Link to="/">
              <h2>
                My Money<span className="text-primary">app</span>
              </h2>
            </Link>
          </li>
          <li className="hover:text-primary  duration-400">
            <NavLink className={activeLink} to="/">
              Home
            </NavLink>
          </li>
          <li className="hover:text-primary  duration-400">
            <NavLink className={activeLink} to="/contact">
              Contact
            </NavLink>
          </li>
          <li
            className={`hover:text-primary  duration-400 ${
              user ? "" : "hidden"
            }`}
          >
            <NavLink className={activeLink} to="/spents">
              Mis Gastos
            </NavLink>
          </li>
        </ul>
        <ul className="flex flex-col  justify-center ">
          <li
            className={`hover:text-primary  duration-400 ${
              user ? "hidden" : ""
            }`}
          >
            <NavLink className={activeLink} to="/login">
              Login
            </NavLink>
          </li>
          <li
            className={`hover:text-primary  duration-400 ${
              user ? "hidden" : ""
            }`}
          >
            <NavLink className={activeLink} to="/register">
              Register
            </NavLink>
          </li>
          <li
            className={`hover:text-primary  duration-400 ${
              user ? "" : "hidden"
            }`}
          >
            <NavLink>
              <div className="flex items-center gap-1">
                {labelEmail}
                <RiUserStarFill className="text-3xl" />
              </div>
            </NavLink>
          </li>
          <li
            onClick={logout}
            className={`hover:text-primary hover:scale-105 duration-400 ${
              user ? "" : "hidden"
            } `}
          >
            <NavLink>
              <div className="flex items-center gap-1">
                Salir
                <TbDoorExit className="text-3xl" />
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderMobile;
