import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { TbDoorExit } from "react-icons/tb";
import { RiUserStarFill } from "react-icons/ri";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/configFirebase";

const HeaderDesktop = ({ activeLink }) => {
  const [labelEmail, setLabelEmail] = useState("");
  const [user, setUser] = useState(false);

  const navigate = useNavigate();
  const cerrarSesion = () => {
    signOut(auth)
      .then(() => {
        console.log("cerro sesion exitosamente");
        setUser(false);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
        setLabelEmail(user.email);
      } else {
        setLabelEmail("");
      }
    });
  }, []);

  return (
    <>
      <div className="hidden md:flex justify-between mx- gap-8">
        <ul className="flex gap-6  items-center justify-center">
          <li className="hover:text-primary hover:scale-105 duration-400">
            <NavLink className={activeLink} to="/">
              Home
            </NavLink>
          </li>
          <li className="hover:text-primary hover:scale-105 duration-400">
            <NavLink className={activeLink} to="/contact">
              Contact
            </NavLink>
          </li>
          <li
            className={`hover:text-primary hover:scale-105 duration-400 ${
              user ? "" : "hidden"
            } `}
          >
            <NavLink className={activeLink} to="/spents">
              Mis Gastos
            </NavLink>
          </li>
        </ul>
        <ul className="flex gap-6 items-center justify-center">
          <li
            className={`hover:text-primary hover:scale-105 duration-400 ${
              user ? "hidden" : ""
            } `}
          >
            <NavLink className={activeLink} to="/login">
              Login
            </NavLink>
          </li>
          <li
            className={`hover:text-primary hover:scale-105 duration-400 ${
              user ? "hidden" : ""
            } `}
          >
            <NavLink className={activeLink} to="/register">
              Register
            </NavLink>
          </li>

          <li
            className={`hover:text-primary hover:scale-105 duration-400 ${
              user ? "" : "hidden"
            } `}
          >
            <NavLink className={activeLink} to="/user-profile">
              <div className="flex items-center justify-center gap-1">
                {labelEmail}
                <RiUserStarFill className="text-3xl" />
              </div>
            </NavLink>
          </li>
          <li
            className={`hover:text-primary hover:scale-105 duration-400 ${
              user ? "" : "hidden"
            } `}
          >
            <NavLink onClick={cerrarSesion}>
              <div className="flex items-center justify-center gap-1">
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

export default HeaderDesktop;
