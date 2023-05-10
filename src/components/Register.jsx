import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configFirebase";

import Reset from "@/components/Reset";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [reset, setReset] = useState(false);

  const registrarUsuarioBD = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      console.log("Password do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log("Inicio de sesion exitoso ", user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const capturarInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const capturarInputPassword = (e) => {
    setPassword(e.target.value);
  };
  const capturarInputCPassword = (e) => {
    setCPassword(e.target.value);
  };

  return (
    <>
      <section
        className={`flex flex-col w-full gap-8 lg:flex-row pt-20 md:px-20 px-4 ${
          reset ? "hidden" : ""
        }`}
      >
        <div className="flex items-center justify-center lg:w-1/2 ">
          <img src="/register.png" className="w-[300px] lg:w-[600px] " />
        </div>

        <div className="divider lg:divider-horizontal" />

        <div className="flex items-center justify-center lg:w-1/2">
          <div className="flex flex-col gap-4 w-[300px] lg:w-[500px] items-center shadow-lg shadow-gray-500 rounded-xl p-6 ">
            <h1 className="w-full text-center font-bold text-2xl ">
              Registrate
            </h1>
            <input
              type="text"
              placeholder="Correo"
              className="input  input-primary  w-full"
              onChange={capturarInputEmail}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="input input-primary  w-full"
              onChange={capturarInputPassword}
            />
            <input
              type="password"
              placeholder="Confrima Contraseña"
              className="input input-primary  w-full"
              onChange={capturarInputCPassword}
            />
            <button
              className="btn btn-secondary capitalize w-full"
              onClick={registrarUsuarioBD}
            >
              Registrate
            </button>
          </div>
        </div>
      </section>
      {reset ? <Reset setReset={setReset} /> : ""}
    </>
  );
};

export default Register;
