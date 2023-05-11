import React, { useEffect, useState } from "react";
import GetSpent from "@/components/spents/GetSpent";
import PostSpent from "@/components/spents/PostSpent";
import { db } from "@/configFirebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Loader from "@/components/Loader";
import Section from "@/components/common/Section";
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
      <Section
        name="contacto"
        title="Mis Gastos"
        subtitle=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat molestiae dolore dolor nam aliquam cumque repellendus necessitatibus maiores minima repellat quam reiciendis facere voluptates sed beatae, et omnis consectetur deserunt."
      >
        {isLoading && <Loader />}
        <div className="container px-5 py-28 mx-auto flex flex-col items-center justify-between">
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
        </div>
      </Section>
    </>
  );
};

export default Spents;
