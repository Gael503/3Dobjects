import Spline from "@splinetool/react-spline";
import React, { useRef } from "react";
import "./style.css";
// https://prod.spline.design/4tYX9ktFwfcTzJPZ/scene.splinecode
export default function Web1() {
  const cube = useRef();

  function onLoad(spline) {
    //para encontrar el id vamos spline abrimos nuestro proyecto
    //seleccionamos lo que queremos mover
    // damos click derecho y elegimos "Copy Development Object ID"
    const obj = spline.findObjectById("38afdf8f-deb6-475a-bfcb-044a8b80cc55");
    cube.current = obj;
  }

  function moveObj() {
    console.log(cube.current);
    cube.current.position.x += 10;
  }
  return (
    <>
      <p>
        Ejemplos de algunos personajes disponibles en la plataforma, se pueden
        crear igual desde 0, con sus respectivas animaciones
      </p>
      <h3>Ejemplo</h3>
      <div className="contenido">
        <Spline scene="https://prod.spline.design/oFIhkG3juYMiKEDI/scene.splinecode" onLoad={onLoad}/>
      </div>
      <button onClick={moveObj} style={{background: "#38FE80", padding: "15px", borderRadius: "15px"}}>Mover Robot a la derecha</button>
    </>
  );
}
