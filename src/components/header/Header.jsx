import { Link, useNavigate } from "react-router-dom";

import HeaderDesktop from "@/components/header/HeaderDesktop";
import HeaderMobile from "@/components/header/HeaderMobile";
import { signOut } from "firebase/auth";
import { auth } from "@/configFirebase";

const activeLink = ({ isActive }) =>
  isActive
    ? " relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-white"
    : ``;

const Header = ({ user, setUser, labelEmail }) => {
  const navigate = useNavigate();
  const logout = () => {
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

  return (
    <>
      <header className="bg-black w-full text-white overflow-hidden fixed z-40">
        <div className="w-full h-24 max-w-[1200px] mx-auto p-4 flex justify-between items-center ">
          <div className="text-white w-[20%] text-lg">
            <Link to="/">
              <h2>
                Dealer<span className="text-primary">App</span>
              </h2>
            </Link>
          </div>

          <nav className="w-[80%] text-lg ">
            {/* desktop */}

            <HeaderDesktop
              activeLink={activeLink}
              user={user}
              labelEmail={labelEmail}
              logout={logout}
            />
            <HeaderMobile
              activeLink={activeLink}
              user={user}
              labelEmail={labelEmail}
              logout={logout}
            />

            {/* mobile */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
