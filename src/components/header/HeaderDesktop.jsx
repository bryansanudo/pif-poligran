import { NavLink } from "react-router-dom";
import { TbDoorExit } from "react-icons/tb";
import { RiUserStarFill } from "react-icons/ri";

const HeaderDesktop = ({ activeLink, user, labelEmail, logout }) => {
  return (
    <>
      <div className="hidden md:flex justify-between mx- gap-8">
        <ul className="flex gap-6  items-center justify-center">
          <li className="hover:text-primary hover:scale-105 duration-400">
            <NavLink className={activeLink} to="/">
              Inicio
            </NavLink>
          </li>
          <li className="hover:text-primary hover:scale-105 duration-400">
            <NavLink className={activeLink} to="/contact">
              Contacto
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
              Iniciar Sesion
            </NavLink>
          </li>
          <li
            className={`hover:text-primary hover:scale-105 duration-400 ${
              user ? "hidden" : ""
            } `}
          >
            <NavLink className={activeLink} to="/register">
              Registrate
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
            <NavLink onClick={logout}>
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
