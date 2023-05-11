import React, { useState } from "react";
import { db } from "@/configFirebase";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { MdLibraryAdd } from "react-icons/md";

const PostSpent = ({ arrayTareas, labelEmail, setArrayTareas }) => {
  async function añadirTarea(e) {
    e.preventDefault();

    const titulo = e.target.titulo.value;
    const valor = e.target.valor.value;
    // crear nuevo array de tareas
    const nvoArrayTareas = [
      ...arrayTareas,
      { id: +new Date(), titulo: titulo, valor: valor },
    ];

    //actualizar base de datos
    const docRef = doc(db, "usuarios", labelEmail);
    updateDoc(docRef, { tareas: [...nvoArrayTareas] });
    // actualizar estdo
    setArrayTareas(nvoArrayTareas);
    toast.success("Gasto Añadido con exito");
    //limpiar form
    e.target.titulo.value = "";
    e.target.valor.value = "";
  }

  return (
    <>
      <form
        onSubmit={añadirTarea}
        className="mb-10 flex flex-col md:flex-row items-center gap-2"
      >
        <input
          type="text"
          className="input input-primary input-sm"
          placeholder="Titulo Gasto"
          id="titulo"
        />
        <input
          type="text"
          className="input input-primary input-sm"
          placeholder="Valor Gasto"
          id="valor"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-4 text-white bg-black  py-1 px-4  focus:outline-none  hover:scale-105 duration-300 rounded-md"
        >
          Agregar
          <MdLibraryAdd />
        </button>
      </form>
    </>
  );
};

export default PostSpent;
