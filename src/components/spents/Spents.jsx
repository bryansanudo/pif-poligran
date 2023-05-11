import React, { useEffect, useState } from "react";
import GetSpent from "@/components/spents/GetSpent";
import PostSpent from "@/components/spents/PostSpent";
import { db } from "@/configFirebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
const Spents = ({ labelEmail }) => {
  const [arrayTareas, setArrayTareas] = useState(null);

  const fakeData = [{ id: 1, titulo: "gaseosa", valor: "1500" }];

  const buscarDocumentoOCrearDocumento = async (idDocumento) => {
    //crear referencia al documento
    const docRef = doc(db, "usuarios", idDocumento);
    //buscar documento
    console.log("esta es la consulta");
    const consulta = await getDoc(docRef);
    //revissar si existe
    if (consulta.exists()) {
      //si si existe
      const infoDocu = consulta.data();
      return infoDocu.tareas;
    } else {
      //si no existe
      await setDoc(docRef, { tareas: [...fakeData] });
      const consulta = await getDoc(docRef);
      const infoDocu = consulta.data();
      return infoDocu.tareas;
    }
  };

  useEffect(() => {
    async function fetchTareas() {
      const tareasFetchadas = await buscarDocumentoOCrearDocumento(labelEmail);
      setArrayTareas(tareasFetchadas);
    }

    fetchTareas();
  }, []);

  return (
    <>
      <PostSpent
        arrayTareas={arrayTareas}
        setArrayTareas={setArrayTareas}
        labelEmail={labelEmail}
      />

      {arrayTareas ? (
        <GetSpent
          arrayTareas={arrayTareas}
          setArrayTareas={setArrayTareas}
          labelEmail={labelEmail}
        />
      ) : null}
    </>
  );
};

export default Spents;
