import React, { useEffect, useState } from "react";
import GetSpent from "@/components/spents/GetSpent";
import PostSpent from "@/components/spents/PostSpent";
import { db } from "@/configFirebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Loader from "@/components/Loader";
const Spents = ({ labelEmail }) => {
  const [arrayTareas, setArrayTareas] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fakeData = [
    {
      id: 1,
      titulo: "(Este es un gasto de prueba)",
      valor: "Ingresar solo el valor '5000'",
    },
  ];
  //

  const buscarDocumentoOCrearDocumento = async (idDocumento) => {
    setIsLoading(true);
    //crear referencia al documento
    const docRef = doc(db, "usuarios", idDocumento);
    //buscar documento

    const consulta = await getDoc(docRef);
    //revissar si existe
    if (consulta.exists()) {
      //si si existe
      const infoDocu = consulta.data();
      setIsLoading(false);
      return infoDocu.tareas;
    } else {
      //si no existe
      await setDoc(docRef, { tareas: [...fakeData] });
      const consulta = await getDoc(docRef);
      const infoDocu = consulta.data();
      setIsLoading(false);
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
      {isLoading && <Loader />}
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
