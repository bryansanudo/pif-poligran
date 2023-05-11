import React from "react";
import { db } from "@/configFirebase";
import { updateDoc, doc } from "firebase/firestore";

const GetSpent = ({ arrayTareas, labelEmail, setArrayTareas }) => {
  async function eliminarTarea(idTareaAeliminar) {
    //crear nuevo array de tareas
    const nvoArrayTareas = arrayTareas.filter(
      (objetoTarea) => objetoTarea.id !== idTareaAeliminar
    );

    // actualizar bd

    const docRef = doc(db, "usuarios", labelEmail);
    updateDoc(docRef, { tareas: [...nvoArrayTareas] });
    // actualizar state
    setArrayTareas(nvoArrayTareas);
  }

  return (
    <>
      <div>
        {arrayTareas.map((objTask) => (
          <div key={objTask.id} className="flex gap-5">
            <div>{objTask.titulo}</div>
            <div>{objTask.valor}</div>

            <button onClick={() => eliminarTarea(objTask.id)}>
              Eliminar Tarea
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetSpent;
