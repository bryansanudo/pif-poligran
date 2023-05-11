import React from "react";
import { db } from "@/configFirebase";
import { updateDoc, doc } from "firebase/firestore";
import { MdDeleteForever } from "react-icons/md";

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
      <div className="w-full flex flex-col  gap-16 ">
        {arrayTareas.map((objTask) => (
          <div
            key={objTask.id}
            className="flex flex-col md:flex-row p-4 rounded-xl justify-between items-center  shadow-primary shadow-md gap-4"
          >
            <div className="flex">
              <span className="mr-2">Titulo: </span>
              <span className="capitalize">{objTask.titulo}</span>
            </div>
            <div className="flex">
              <p>Valor $</p>
              <p>{objTask.valor} Pesos</p>
            </div>

            <button onClick={() => eliminarTarea(objTask.id)}>
              <MdDeleteForever className="text-4xl hover:scale-110 duration-300" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetSpent;
