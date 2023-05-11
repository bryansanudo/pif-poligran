import React from "react";
import { MdDeleteForever } from "react-icons/md";

const GetUserData = () => {
  return (
    <>
      <div className="w-full flex flex-col  gap-16 ">
        <div className="flex flex-col md:flex-row p-4 rounded-xl justify-between items-center  shadow-primary shadow-md">
          <div className="flex">
            <span className="mr-2">Nombre: </span>
            <span className="capitalize">"Nombre Ingresado"</span>
          </div>
          <div className="flex">
            <p>Ingresos Mensuales</p>
            <p>Valor $ Pesos</p>
          </div>

          <button>
            <MdDeleteForever className="text-4xl hover:scale-110 duration-300" />
          </button>
        </div>
      </div>
    </>
  );
};

export default GetUserData;
