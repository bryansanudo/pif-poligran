import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configFirebase";
import { useNavigate } from "react-router-dom";

import Reset from "@/components/Reset";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //estado para mostar dinamicamente login o reset
  const [reset, setReset] = useState(false);

  const redirect = useNavigate();
  const iniciarSesion = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Inicio de sesion exitoso ", user);
        redirect("/spents");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <section
        className={`flex flex-col w-full gap-8 lg:flex-row pt-20 md:px-20 px-4 ${
          reset ? "hidden" : ""
        }`}
      >
        <div className="flex items-center justify-center lg:w-1/2 ">
          <img src="/login.png" className="w-[300px] lg:w-[600px] " />
        </div>

        <div className="divider lg:divider-horizontal" />

        <div className="flex items-center justify-center lg:w-1/2">
          <form className="flex flex-col gap-4 w-[300px] lg:w-[500px] items-center shadow-lg shadow-gray-500 rounded-xl p-6 ">
            <h1 className="w-full text-center font-bold text-2xl ">
              Inicio de Sesion
            </h1>
            <input
              type="text"
              placeholder="Correo"
              className="input  input-primary  w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="input input-primary  w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn btn-secondary capitalize w-full"
              onClick={iniciarSesion}
            >
              Ingresar
            </button>
            <div
              className="link link-primary w-full text-center lg:text-left "
              onClick={() => setReset(true)}
            >
              Cambiar Contraseña
            </div>
          </form>
        </div>
      </section>
      {reset ? <Reset setReset={setReset} /> : ""}
    </>
  );
};

export default Login;
