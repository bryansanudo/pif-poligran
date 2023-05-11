import React from "react";
import { db } from "@/configFirebase";
import { doc, updateDoc } from "firebase/firestore";

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
    //limpiar form
    e.target.titulo.value = "";
    e.target.valor.value = "";
  }

  return (
    <div className="pt-40">
      <form onSubmit={añadirTarea}>
        <input
          type="text"
          className="input input-primary"
          placeholder="titulo gasto"
          id="titulo"
        />
        <input
          type="text"
          className="input input-primary"
          placeholder="valor gasto"
          id="valor"
        />
        <button type="submit">Agregar Tarea</button>
      </form>
    </div>
  );
};

export default PostSpent;
