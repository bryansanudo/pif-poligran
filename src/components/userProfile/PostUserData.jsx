import React from "react";
import { MdLibraryAdd } from "react-icons/md";

const PostUserData = () => {
  return (
    <>
      <form className="mb-10 flex flex-col md:flex-row items-center gap-2">
        <input
          type="text"
          className="input input-primary input-sm"
          placeholder="Nombre"
          id="titulo"
        />
        <input
          type="text"
          className="input input-primary input-sm"
          placeholder="Ingresos Mensuales"
          id="valor"
        />
        <div className="flex items-center justify-center gap-4 text-white bg-black  py-1 px-4  focus:outline-none  hover:scale-105 duration-300 rounded-md">
          Agregar
          <MdLibraryAdd />
        </div>
      </form>
    </>
  );
};

export default PostUserData;
